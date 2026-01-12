import { MoviesSchema } from "../models/Movies/MovieSchema.js";
import { IncomingForm } from "formidable";
import fs from "fs";
import path from "path";
import { asyncHandler } from "../utils/asyncHandler.js";

export const createMovie = async (req, res) => {
  try {
    console.log("🎬 Starting file upload with Formidable...");

    // Ensure uploads directory exists
    if (!fs.existsSync("uploads")) {
      fs.mkdirSync("uploads", { recursive: true });
    }

    // Handle multipart/form-data request
    const form = new IncomingForm({
      uploadDir: path.join(process.cwd(), "uploads"),
      keepExtensions: true,
      maxFileSize: 5 * 1024 * 1024, // 5MB
      multiples: true, // Enable-Disable multiple files per field
    });
    
    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error("Formidable error:", err);
        return res.status(400).json({
          success: false,
          message: "File upload failed",
          error: err.message,
        });
      }

      console.log("Fields received:", Object.keys(fields));
      console.log("Files received:", Object.keys(files));

      try {
        // Helper function to get field value safely
        const getField = (fieldName, defaultValue = "") => {
          const value = fields[fieldName];
          if (Array.isArray(value)) {
            return value[0] || defaultValue;
          }
          return value || defaultValue;
        };

        // Helper function for JSON parsing
        const safeParse = (jsonString, defaultValue) => {
          if (!jsonString) return defaultValue;
          try {
            return typeof jsonString === "string"
              ? JSON.parse(jsonString)
              : jsonString;
          } catch (error) {
            console.log(`JSON parse error for ${jsonString}:`, error.message);
            return defaultValue;
          }
        };

        // Get all fields with defaults
        const type = getField("type", "normal");
        const title = getField("title");
        
        // Check required field
        if (!title) {
          return res.status(400).json({
            success: false,
            message: "Title is required",
          });
        }

        // Initialize variables with defaults
        let parsedCategories = [];
        let parsedDuration = { hours: 2, minutes: 0 };
        let parsedSlots = [];
        let parsedSeatPrices = { standard: 250, recliner: 400 };
        let parsedCast = [];
        let parsedDirectors = [];
        let parsedProducers = [];
        let parsedLatestTrailer = null;
        let rating = "0";
        let genre = "Action";
        let auditorium = "Audi 1";
        let story = "";

        if (type !== 'releaseSoon') {
            const categories = getField("categories", "[]");
            const duration = getField("duration", '{"hours": 2, "minutes": 0}');
            rating = getField("rating", "0");
            genre = getField("genre", "Action");
            const slots = getField("slots", "[]");
            const seatPrices = getField("seatPrices", '{"standard": 250, "recliner": 400}');
            auditorium = getField("auditorium", "Audi 1");
            const cast = getField("cast", "[]");
            const directors = getField("directors", "[]");
            const producers = getField("producers", "[]");
            story = getField("story", "");
            const latestTrailer = getField("latestTrailer", "null");

            // Parse all JSON fields
            parsedCategories = safeParse(categories, []);
            parsedDuration = safeParse(duration, { hours: 2, minutes: 0 });
            parsedSlots = safeParse(slots, []);
            parsedSeatPrices = safeParse(seatPrices, { standard: 250, recliner: 400 });
            parsedCast = safeParse(cast, []);
            parsedDirectors = safeParse(directors, []);
            parsedProducers = safeParse(producers, []);
            parsedLatestTrailer = safeParse(latestTrailer, null);
        } else {
            // For releaseSoon type, only get categories
            const categories = getField("categories", "[]");
            parsedCategories = safeParse(categories, []);
        }

        console.log("📋 Field values:", {
          type,
          title,
          categories: parsedCategories,
          duration: parsedDuration,
          rating,
          genre,
          auditorium,
          story,
        });

        // Process file paths safely
        let imagePath = null;
        let thumbnailPath = null;

        if (files.image && files.image[0]) {
            const imageFile = files.image[0];
            const originalName = imageFile.originalFilename || "image.jpg";
            const newFileName = `image-${Date.now()}-${Math.random()
                .toString(36)
                .substring(2)}${path.extname(originalName)}`;
            const newFilePath = path.join("uploads", newFileName);

            fs.renameSync(imageFile.filepath, newFilePath);
            //imagePath = `/uploads/${newFileName}`;
            imagePath = `/assets/${newFileName}`; // Changed from /uploads to /assets

            console.log("🖼️ Image saved:", imagePath);
        }

        if (files.thumbnail && files.thumbnail[0]) {
          const thumbnailFile = files.thumbnail[0];
          const originalName = thumbnailFile.originalFilename || "thumbnail.jpg";
          const newFileName = `thumbnail-${Date.now()}-${Math.random()
            .toString(36)
            .substring(2)}${path.extname(originalName)}`;
          const newFilePath = path.join("uploads", newFileName);

          fs.renameSync(thumbnailFile.filepath, newFilePath);
        //   thumbnailPath = `/uploads/${newFileName}`;
          thumbnailPath = `/assets/${newFileName}`;
          console.log("🎞️ Thumbnail saved:", thumbnailPath);
        }

        // Create movie object
        const movieData = {
          type,
          title,
          categories: parsedCategories,
          image: imagePath,
          duration: parsedDuration,
          rating: Number(rating),
          genre,
          slots: parsedSlots,
          seatPrices: parsedSeatPrices,
          auditorium,
          cast: parsedCast,
          directors: parsedDirectors,
          producers: parsedProducers,
          story,
          latestTrailer: parsedLatestTrailer,
        };

        // Add thumbnail to latestTrailer if it exists
        if (movieData.latestTrailer && thumbnailPath) {
          movieData.latestTrailer.thumbnail = thumbnailPath;
        }

        console.log("🎯 Final movie data:", JSON.stringify(movieData, null, 2));

        // Create movie in database
        const newMovie = await MoviesSchema.create(movieData);

        return res.status(201).json({
          success: true,
          message: "Movie created successfully",
          data: {
            movie: newMovie,
          },
        });
      } catch (error) {
        console.error("❌ Error creating movie:", error);
        return res.status(500).json({
          success: false,
          message: "Internal server error",
          error: error.message,
        });
      }
    });
  } catch (error) {
    console.error("❌ Outer error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

// getMovies Based on [page-size ,limit , category, search ,type , orderBy];
export const getMovies = asyncHandler(async (req, res) => {
  const {
    category,
    limit = 10,
    page = 1,
    search,
    type,
    sort = "createdAt",
    order = "desc",
  } = req.query;

  // Build query object
  let query = {};
  const conditions = [];

  // Category filter
    if (category && category.trim().length !== 0) {
        const decodedCategory = decodeURIComponent(category);

        const categoriesArray = decodedCategory.split(',').map(cat => cat.trim());
        console.log(categoriesArray);
        conditions.push({
            categories: {
                $in: categoriesArray.map(cat => new RegExp(cat, "i"))
            }
        });
    }

  // Type filter (genre or movie type)
  if (type && type.trim().length !== 0) {
    conditions.push({
      $or: [
        { genre: { $regex: type.trim(), $options: "i" } },
        { type: { $regex: type.trim(), $options: "i" } },
      ],
    });
  }

  // Search across multiple fields
  if (search && search.trim().length !== 0) {
    const searchRegex = new RegExp(search.trim(), "i");
    conditions.push({
      $or: [
        { title: { $regex: searchRegex } },
        { story: { $regex: searchRegex } },
        { "latestTrailer.title": { $regex: searchRegex } },
        { "latestTrailer.description": { $regex: searchRegex } },
        { genre: { $regex: searchRegex } },
      ],
    });
  }

  // Combine all conditions with $and
  if (conditions.length > 0) {
    query = { $and: conditions };
  }

  console.log("🔍 Final query:", JSON.stringify(query, null, 2));

  // Pagination
  const pageSize = parseInt(limit);
  const currentPage = parseInt(page);
  const skip = (currentPage - 1) * pageSize;

  // Sort configuration
  const sortConfig = { createdAt: -1 };

  // Execute query with pagination
  const movies = await MoviesSchema.find(query)
    .sort(sortConfig)
    .skip(skip)
    .limit(pageSize)
    .select("-__v") // Exclude version key
    .lean(); // Better performance

  // Get total count for pagination info
  const totalMovies = await MoviesSchema.countDocuments(query);
  const totalPages = Math.ceil(totalMovies / pageSize);

  // Response data
  const response = {
    success: true,
    data: {
      movies,
      pagination: {
        currentPage,
        totalPages,
        totalMovies,
        hasNextPage: currentPage < totalPages,
        hasPrevPage: currentPage > 1,
        pageSize,
      },
    },
  };

  return res.status(200).json(response);
});

// getMovie By ID +attache latestTrailer if it's type latestTrailer
export const getMoiveById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!id) throw new AppError("MovieID is required", 400);

  const movie = await MoviesSchema.findById(id).select("-__v").lean();
  if (!movie) throw new AppError("Invalid MovieID", 400);

  return res.status(200).json({
    success: true,
    data: {
      movie,
    },
  });
});

// Delete Movie ;
