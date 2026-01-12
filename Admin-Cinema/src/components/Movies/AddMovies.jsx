import { useState } from 'react';
import { addMoviesStyle } from '../../styles/addmovies.js';
import { Film, Star, Clock, Play } from 'lucide-react';
import { PersonsMovies } from './PersonsMovies.jsx';
import { SlotsMovies } from './SlotsMovies.jsx';
import { LatestTrailer } from './LatestTrailer.jsx';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const MOVIE_TYPES = [
  { value: 'normal', label: 'Normal', icon: Film },
  { value: 'featured', label: 'Featured', icon: Star },
  { value: 'releaseSoon', label: 'Coming Soon', icon: Clock },
  { value: 'latestTrailers', label: 'Latest Trailers', icon: Play },
];
const MOVIE_CATEGORIES = [
  'Action',
  'Comedy',
  'Drama',
  'Horror',
  'Sci-Fi',
  'Thriller',
  'Romance',
  'Adventure',
  'Fantasy',
  'Animation',
  'Documentary',
];

export const AddMovies = () => {
  const [selectedMovieType, setSelectedMovieType] = useState('');
  const [selectedMovieCategory, setSelectedMovieCategory] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [slots, setSlots] = useState({
    time: 0,
    day: '',
    ampm: 'AM',
  });
  
  const [movieSlots, setMovieSlots] = useState([slots]);

  const [personSchema, setPersonSchema] = useState({
    name: '',
    role: '', // producer ,cast,directory
    img: '',
  });

  const [persons, setPersons] = useState({
    cast: [{ ...personSchema, role: 'cast' }],
    directors: [{ ...personSchema, role: 'directors' }],
    producers: [{ ...personSchema, role: 'producers' }],
  });

  const [latestTrailerSchema, setLatestTrailer] = useState({
    title: '',
    genre: [],
    duration: {
      hours: 0,
      minutes: 0,
    },
    year: 0,
    description: '',
    thumbnai: '', //Image ,
    videoUrl: '', //"https://www.youtube.com/watch?v=coOKvrsmQiI"
    director: [personSchema],
    producer: [personSchema],
    singer: [personSchema],
  });

  const [movieMetaData, setMovieMetaData] = useState({
    type: '', // related to MOVIE_TYPES ;
    title: '',
    image: '',
    categories: [], // related to MOVIE_CATEGORIES ;
    duration: {
      hours: 0,
      minutes: 0,
    },
    rating: 0,
    genre: '', // related to MOVIE_CATEGORIES ;
    slots: [slots],
    auditorium: {},
    story: '',
    cast: [personSchema],
    directors: [personSchema],
    producers: [personSchema],
    latestTrailer: [latestTrailerSchema],
    seatedPrices: {
      standard: 0,
      recliner: 0,
    },
  });

  const [loading, setLoading] = useState(false);

  const [movieImageFile, setMovieImageFile] = useState(null);
  const [thumbnailFile, setThumbnailFile] = useState(null);
  const [movieImagePreview, setMovieImagePreview] = useState('');
  const [thumbnailPreview, setThumbnailPreview] = useState('');
  const [uploadImg, setUploadImg] = useState(true);
  // handle basic movie form ;
  const handleInputChange = (e) => {
    let { name, value } = e.target;
    console.log(name, value);

    if (name === 'categories') value = [value];
    setMovieMetaData((previousData) => ({ ...previousData, [name]: value }));
  };
  // handle minutes , hours at duration-key movie-form ;
  const handleDurationChange = (field, value) => {
    setMovieMetaData((previousData) => ({
      ...previousData,
      duration: {
        ...previousData.duration,
        [field]: parseInt(value) || 0,
      },
    }));
  };
  const handleSeatedPriceChange = (field, value) => {
    setMovieMetaData((previousData) => ({
      ...previousData,
      seatedPrices: {
        ...previousData.seatedPrices,
        [field]: parseInt(value) || 0,
      },
    }));
  };

  // handle cast , directors , producers ;
  const handlePersonChange = (personType, index, field, value) => {
    setPersons((prev) => ({
      ...prev,
      [personType]: prev[personType].map((person, i) =>
        i === index ? { ...person, [field]: value, role: personType } : person,
      ),
    }));
  };

  const addPerson = (personType) => {
    setPersons((prev) => ({
      ...prev,
      [personType]: [
        ...prev[personType],
        { ...personSchema, role: personType },
      ],
    }));
  };

  const removePerson = (personType, index) => {
    setPersons((prev) => ({
      ...prev,
      [personType]: prev[personType].filter((_, i) => i !== index),
    }));
  };

  // handle slots-key [day , hours , audi] ;
  const handleSlotChange = (index, field, value) => {
    setMovieSlots((prev) =>
      prev.map((slot, i) => (i === index ? { ...slot, [field]: value } : slot)),
    );
  };

  const addSlot = () => {
    setMovieSlots((prev) => [...prev, { time: 0, day: '', ampm: 'AM' }]);
  };

  const removeSlot = (index) => {
    setMovieSlots((prev) => prev.filter((_, i) => i !== index));
  };

  // adding categories as array;
  const handleCategoryToggle = (category) => {
    setSelectedCategories((prev) => {
      if (prev.includes(category)) {
        return prev.filter((c) => c !== category);
      } else {
        return [...prev, category];
      }
    });
  };

  const handleLatestTrailerChange = (e) => {
    const { name, value } = e.target;
    setLatestTrailer((previousTrailerData) => ({
      ...previousTrailerData,
      [name]: value,
    }));
  };

  // Handle movie image file selection
  const handleMovieImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setMovieImageFile(file);
      // Create preview URL
      const previewUrl = URL.createObjectURL(file);
      setMovieImagePreview(previewUrl);

      // Also update the image URL in movieMetaData for fallback
      setMovieMetaData((prev) => ({
        ...prev,
        image: previewUrl, // Temporary preview URL
      }));
    }
  };

  // Handle thumbnail file selection
  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setThumbnailFile(file);
      // Create preview URL
      const previewUrl = URL.createObjectURL(file);
      setThumbnailPreview(previewUrl);

      // Also update the thumbnail in latestTrailerSchema for fallback
      setLatestTrailer((prev) => ({
        ...prev,
        thumbnai: previewUrl, // Temporary preview URL
      }));
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    let latestTrailerObj = null;

    // promise toaster ;
    try {
      const formData = new FormData();
      formData.append('type', movieMetaData.type);
      formData.append('title', movieMetaData.title);
      formData.append('genre', movieMetaData.genre);
      if (movieMetaData.type !== 'releaseSoon') {
        formData.append('story', movieMetaData.story);
        formData.append('rating', movieMetaData.rating.toString());
        formData.append('auditorium', movieMetaData.auditorium || 'Audi 1');

        // Append arrays and objects as JSON strings
        formData.append('categories', JSON.stringify(selectedCategories));
        formData.append('duration', JSON.stringify(movieMetaData.duration));
        formData.append('slots', JSON.stringify(movieSlots));
        formData.append(
          'seatPrices',
          JSON.stringify(movieMetaData.seatedPrices),
        );
        formData.append('cast', JSON.stringify(persons.cast));
        formData.append('directors', JSON.stringify(persons.directors));
        formData.append('producers', JSON.stringify(persons.producers));

        if (
          selectedMovieType === 'normal' ||
          selectedMovieType === 'latestTrailers'
        ) {
          latestTrailerObj = {
            title: latestTrailerSchema.title || movieMetaData.title,
            duration: movieMetaData.duration,
            cast: persons.cast,
            directors: persons.directors,
            producers: persons.producers,
            genre: selectedCategories,
            year: latestTrailerSchema.year || new Date().getFullYear(),
          };
          formData.append('latestTrailer', JSON.stringify(latestTrailerObj));
        }
      }
      if (movieImageFile) {
        formData.append('image', movieImageFile);
      } else if (movieMetaData.image) {
        // Fallback to URL if no file selected
        formData.append('image', movieMetaData.image);
      }

      // Make API call
      const response = await axios.post(
        'http://localhost:5000/api/movies',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          timeout: 30000, // 30 seconds timeout
        },
      );

      if (response.data.success) {
        toast.success('Movie Created', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });

        console.log('Movie created:', response.data);
      } else {
        throw new Error(response.data.message || 'Failed to create movie');
      }
    } catch (err) {
      console.log('Error Occurred: ', err);
      toast.error('Movie Created', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    }
  };

  return (
    <div className={addMoviesStyle.container}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className={addMoviesStyle.section.base}>
        {/* Movie Type Selection */}
        <h2 className={addMoviesStyle.section.title} style={{fontFamily:'Dance'}}>Select Movie Type</h2>
        <div className={addMoviesStyle.radioGroup.container}>
          {MOVIE_TYPES.map((type) => (
            <label
              key={type.value}
              className={`${addMoviesStyle.radioGroup.label} ${
                selectedMovieType === type.value
                  ? addMoviesStyle.radioGroup.selected
                  : ''
              }`}
            >
              <input
                type="radio"
                value={type.value}
                checked={selectedMovieType === type.value}
                name="type"
                onChange={(e) => {
                  setSelectedMovieType(e.target.value);
                  handleInputChange(e);
                }}
                className={addMoviesStyle.radioGroup.input}
              />
              <div className={addMoviesStyle.radioGroup.content}>
                <div className={addMoviesStyle.radioGroup.iconContainer}>
                  <type.icon
                    className={`${addMoviesStyle.radioGroup.icon} ${
                      selectedMovieType === type.value ? 'text-red-400' : ''
                    }`}
                  />
                  <span className={addMoviesStyle.radioGroup.text}>
                    {type.label}
                  </span>
                </div>
              </div>
            </label>
          ))}
        </div>

        {/* Basic Movie Form */}
        {selectedMovieType && (
          <form
            onSubmit={handleSubmit}
            className={addMoviesStyle.form.container}
          >
            <h2 className={addMoviesStyle.section.title}>Movie Information</h2>

            <div className={addMoviesStyle.form.grid}>
              {/* Movie Title */}
              <div className={addMoviesStyle.form.group}>
                <label className={addMoviesStyle.form.label}>
                  Movie Title *
                </label>
                <input
                  type="text"
                  value={movieMetaData.title}
                  onChange={(e) => handleInputChange(e)}
                  name="title"
                  className={addMoviesStyle.form.input}
                  placeholder="Enter movie title"
                  required
                />
              </div>

              {/* Movie Category */}
              <div className={addMoviesStyle.form.group}>
                <label className={addMoviesStyle.form.label}>Category *</label>

                <select
                  value={selectedMovieCategory}
                  onChange={(e) => {
                    setSelectedMovieCategory(e.target.value);
                    handleInputChange(e);
                  }}
                  name="genre"
                  className={addMoviesStyle.form.select}
                  required
                >
                  <option className="bg-gray-900 text-white" value="">
                    Select a category
                  </option>

                  {MOVIE_CATEGORIES.map((category) => (
                    <option
                      key={category}
                      value={category}
                      className="bg-gray-900 text-white"
                    >
                      {category}
                    </option>
                  ))}
                </select>
              </div>


              {selectedMovieType !== 'releaseSoon' && (
                <>
                  {/* Categories Selection */}
                  <div className={addMoviesStyle.categories.container}>
                    <label className={addMoviesStyle.categories.title}>
                      Categories (Select multiple) *
                    </label>
                    <div className={addMoviesStyle.categories.grid}>
                      {MOVIE_CATEGORIES.map((category) => (
                        <label
                          key={category}
                          className={addMoviesStyle.categories.checkboxLabel}
                        >
                          <input
                            type="checkbox"
                            checked={selectedCategories.includes(category)}
                            onChange={() => handleCategoryToggle(category)}
                            className={addMoviesStyle.categories.checkbox}
                          />
                          <span
                            className={addMoviesStyle.categories.checkboxText}
                          >
                            {category}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Duration */}
                  <div className={addMoviesStyle.form.group}>
                    <label className={addMoviesStyle.form.label}>
                      Duration *
                    </label>
                    <div className={addMoviesStyle.duration.container}>
                      <div className={addMoviesStyle.duration.group}>
                        <input
                          type="number"
                          min="0"
                          max="10"
                          value={movieMetaData.duration.hours}
                          onChange={(e) =>
                            handleDurationChange('hours', e.target.value)
                          }
                          className={addMoviesStyle.duration.input}
                          placeholder="Hours"
                          required
                        />
                        <span className="text-xs text-gray-400 mt-1">
                          Hours
                        </span>
                      </div>
                      <div className={addMoviesStyle.duration.group}>
                        <input
                          type="number"
                          min="0"
                          max="59"
                          value={movieMetaData.duration.minutes}
                          onChange={(e) =>
                            handleDurationChange('minutes', e.target.value)
                          }
                          className={addMoviesStyle.duration.input}
                          placeholder="Minutes"
                          required
                        />
                        <span className="text-xs text-gray-400 mt-1">
                          Minutes
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className={addMoviesStyle.form.group}>
                    <label className={addMoviesStyle.form.label}>
                      Rating *
                    </label>
                    <input
                      type="number"
                      min="0"
                      max="10"
                      step="0.1"
                      value={movieMetaData.rating}
                      onChange={(e) => handleInputChange(e)}
                      className={addMoviesStyle.form.input}
                      placeholder="0.0 - 10.0"
                      name="rating"
                      required
                    />
                  </div>

                  {/* Seated Prices Grid */}
                  <div className={addMoviesStyle.form.group}>
                    <label className={addMoviesStyle.form.label}>
                      Standard Price *
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={movieMetaData.seatedPrices.standard}
                      onChange={(e) =>
                        handleSeatedPriceChange('standard', e.target.value)
                      }
                      name="standard"
                      className={addMoviesStyle.form.input}
                      placeholder="Standard Price"
                      required
                    />
                  </div>

                  {/* Movie Recliner Seated Price */}
                  <div className={addMoviesStyle.form.group}>
                    <label className={addMoviesStyle.form.label}>
                      Recliner Price *
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={movieMetaData.seatedPrices.standard}
                      onChange={(e) =>
                        handleSeatedPriceChange('recliner', e.target.value)
                      }
                      name="recliner"
                      className={addMoviesStyle.form.input}
                      placeholder="Recliner Price"
                      required
                    />
                  </div>
                </>
              )}
            </div>

            {selectedMovieType !== 'releaseSoon' && (
              <>
                {/* Story/Description */}
                <div className={addMoviesStyle.form.group}>
                  <label className={addMoviesStyle.form.label}>
                    Story / Description *
                  </label>
                  <textarea
                    value={movieMetaData.story}
                    onChange={(e) => handleInputChange(e)}
                    className={addMoviesStyle.form.textarea}
                    placeholder="Enter movie story or description..."
                    rows="4"
                    name="story"
                    required
                  />
                </div>
                {/* LatestTrailer Schema  */}
                <LatestTrailer
                  latestTrailerSchema={latestTrailerSchema}
                  handleLatestTrailerChange={handleLatestTrailerChange}
                />

                {/* /* PERSON-SCHEMA MOVIE Form */}
                <PersonsMovies
                  persons={persons}
                  handlePersonChange={handlePersonChange}
                  addPerson={addPerson}
                  removePerson={removePerson}
                />

                {/* /* Slots-Schema */}
                <SlotsMovies
                  addSlot={addSlot}
                  movieSlots={movieSlots}
                  removeSlot={removeSlot}
                  handleSlotChange={handleSlotChange}
                />
              </>
            )}

            {/* Movie Image Upload || Image URL */}
            <div className={addMoviesStyle.form.group}>
              <label className={addMoviesStyle.form.label}>Movie Image *</label>
              <div className="space-y-3">
                {/* Toggle button */}
                <button
                  type="button"
                  onClick={() => setUploadImg(!uploadImg)}
                  className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-300"
                >
                  {uploadImg ? 'Use URL Instead' : 'Upload Image'}
                </button>

                {uploadImg ? (
                  <>
                    {/* File input */}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleMovieImageChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border-2 border-gray-700 rounded-xl text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-red-600 file:text-white hover:file:bg-red-700 transition-all duration-300"
                    />
                    {/* Image preview */}
                    {movieImagePreview && (
                      <div className="mt-2">
                        <p className="text-sm text-gray-400 mb-2">Preview:</p>
                        <img
                          src={movieImagePreview}
                          alt="Movie preview"
                          className="w-32 h-32 object-cover rounded-lg border-2 border-gray-600"
                        />
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    {/* URL input */}
                    <input
                      type="url"
                      value={movieMetaData.image}
                      onChange={(e) => handleInputChange(e)}
                      className={addMoviesStyle.form.input}
                      placeholder="https://example.com/movie-image.jpg"
                      name="image"
                      required
                    />
                  </>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <button type="submit" className={addMoviesStyle.form.button}>
              Add Movie
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
