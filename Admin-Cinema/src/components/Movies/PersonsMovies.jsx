import { Plus } from 'lucide-react';
import { addMoviesStyle } from '../../styles/addmovies.js';

const MOVIE_PERSON_TYPES = [
    {value:'cast' , label:'CAST'},
    {value:'producers',label:'PRODUCER'},
    {value:'directors',label:'DIRECTOR'},
]

export const PersonsMovies = ({ 
    persons, 
    handlePersonChange, 
    addPerson, 
    removePerson 
}) => {
    return (
      <div className={addMoviesStyle.personSchema.container}>
          {MOVIE_PERSON_TYPES.map((person_type) => (
              <div key={person_type.value} className={addMoviesStyle.personSchema.section}>
                  <div className={addMoviesStyle.personSchema.personHeader}>
                      <h4 className={addMoviesStyle.personSchema.personType}>
                          {person_type.label}
                      </h4>
                      <button
                          type="button"
                          onClick={() => addPerson(person_type.value)}
                          className={addMoviesStyle.personSchema.addButton}
                      >
                          <Plus className="h-4 w-4" />
                          Add {person_type.label}
                      </button>
                  </div>
                  
                  <div className={addMoviesStyle.personSchema.personGrid}>
                      {persons[person_type.value].map((person, index) => (
                          <div key={index} className={addMoviesStyle.personSchema.personCard}>
                              <div className="flex justify-between items-center mb-3">
                                  <span className="text-sm text-gray-400">#{index + 1}</span>
                                  {index > 0 && (
                                      <button
                                          type="button"
                                          onClick={() => removePerson(person_type.value , index)}
                                          className={addMoviesStyle.personSchema.removeButton}
                                      >
                                          Remove
                                      </button>
                                  )}
                              </div>
                              
                              <div className={addMoviesStyle.personSchema.inputGroup}>
                                  <label className={addMoviesStyle.personSchema.label}>
                                      Name:
                                      <input
                                          type="text"
                                          value={person.name}
                                          onChange={(e) => handlePersonChange(
                                              person_type.value ,
                                              index,
                                              'name',
                                              e.target.value
                                          )}
                                          className={addMoviesStyle.personSchema.input}
                                          placeholder={`Enter ${person_type.label.toLowerCase()} name`}
                                      />
                                  </label>
                                  
                                
                                  
                                  <label className={addMoviesStyle.personSchema.label}>
                                      Image URL:
                                      <input
                                          type="url"
                                          value={person.img}
                                          onChange={(e) => handlePersonChange(
                                              person_type.value ,
                                              index,
                                              'img',
                                              e.target.value
                                          )}
                                          className={addMoviesStyle.personSchema.input}
                                          placeholder="https://example.com/image.jpg"
                                      />
                                  </label>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          ))}
      </div>
    )
}