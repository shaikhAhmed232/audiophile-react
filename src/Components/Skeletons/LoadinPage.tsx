import React from "react";

const url =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARQAAAC2CAMAAAAvDYIaAAAAaVBMVEX///9RUVFZWVl1dXWOjo6amprOzs6+vr78/Pzn5+eXl5dHR0fLy8tvb2/v7++KioqioqLX19dERET29vbGxsbe3t7u7u7AwMCDg4NcXFynp6dUVFRNTU2xsbFqamri4uJ7e3s/Pz9kZGThv4iLAAACi0lEQVR4nO3b0XaiMBSFYdEQAgKCoFjB0pn3f8gBEqh2bOHKsJr/u4NycdjrEJJINxsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgkqa2K1idIGn2dXa2XcaaKN+rt9utl7S2K1mRoNkOvJ3tSqwKs8vlejIH6m1rNKXVquyqPpLdLtlJfSS9MRQvs1uXTXkXSe9d90pcj6HUkeXK7FG+CSXRjdFOoXhXy6XZk+5Gl2I4kYypNLm5RJbSXn1W3IWiZyb5m07F009Pke07zU3ZLPLVissYijBnytqr69o7DDGoj73X2wunUqnGMaUaz/SvaGGeHV9n0qVys1WgFSLR4+xdKyhlDs7eZOtUq6hr8v6+uxXP/hYcp1D+nJ5d8Hup9rsbzvZTKMf4pTWtWHXXKfn85b/AgkEibKZQGgfGFJVnfpbP3agS09vHhfnt9SCEOMy+Z9O/OpXjx9OB+HcJ+ky6VGa3B9LIO+6PdebAw5MKY8HNtuUtdmIXrr2YUA4OPBVLhWMoglAmRWQaxa3V74xcD7QitF3IqshDRzi2npml8nJ27gYAAF6AGf5XRZxFmWu//M25Rb7vR9X8hQ6RfSZdKk5slCwVmFBolU/qZkIJbFeyJrEJhWXynXM0DLRX1sn32iyKxJU9pkdFHrfL+mT6BgGTcxiGfH79KA179MqD8xCKg//BoH5YGxZDKK+rZSUKWVby+1j6VJxbUBdBr/ohlcK5TDb5EErgxodKS+lMAvn5gklPJ/cGkUfl11DOMpax440T6lCmnRUVy07sdq8o+aVRCKWX5vn9+0WHwsz+QT6kwsT+gWql5IOE/7BZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGC5f6FUGVYMfOfLAAAAAElFTkSuQmCC";

function LoadingPage() {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <img src={url} alt={"loading"} />
    </div>
  );
}

export default LoadingPage;
