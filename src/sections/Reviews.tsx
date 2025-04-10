import  { useState } from "react";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Luis",
      rating: 5,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      id: 2,
      name: "Kerry Rohan",
      rating: 5,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Reviews</h2>
          <p className="mt-2 text-lg text-gray-600">YOUR OPINIONS</p>
          <h3 className="mt-1 text-xl font-semibold text-gray-800">Your Opinions</h3>
        </div>

        {/* Tarjeta de Review */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <div className="text-center">
            <h4 className="text-xl font-bold text-gray-900 mb-2">
              {reviews[currentIndex].name}
            </h4>
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`h-6 w-6 ${i < reviews[currentIndex].rating ? 'text-yellow-400' : 'text-gray-300'}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-600">
              {reviews[currentIndex].content}
            </p>
          </div>
        </div>

        {/* Controles de navegación */}
        <div className="flex justify-center gap-4">
          <button 
            onClick={prevReview}
            className="px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
            aria-label="Opinión anterior"
          >
            &larr; Anterior
          </button>
          <button 
            onClick={nextReview}
            className="px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
            aria-label="Siguiente opinión"
          >
            Siguiente &rarr;
          </button>
        </div>

        {/* Indicadores */}
        <div className="flex justify-center mt-6 gap-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-gray-800' : 'bg-gray-300'}`}
              aria-label={`Ir a opinión ${index + 1}`}
            />
          ))}
        </div>

        {/* Texto final */}
        <p className="text-center mt-8 text-gray-600">Your Opinions</p>
      </div>
    </section>
  );
};

export default Reviews;