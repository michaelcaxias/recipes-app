// import React from 'react';
// // import PropTypes from 'prop-types';

// export default function IngredientListProgress({ ingredients }) {
//   // const [isChecked, setIsChecked] = useState(false);

//   const arrayKeys = Object.keys(ingredients);
//   const ingredientsKeys = arrayKeys.filter((key) => key.includes('strIngredient'));
//   const ingredientMeasureKeys = arrayKeys.filter((key) => key.includes('strMeasure'));

//   function handleCheckbox({ target: { checked = false } }) {
//     const isChecked = checked;
//     console.log(isChecked);
//     return !isChecked;
//   }

//   // const isChecked = handleCheckbox(event);
//   return (
//     <ul>
//       { ingredientsKeys.map((key, index) => (
//         ingredients[key] && (
//           <label
//             htmlFor={ key }
//             key={ key }
//             data-testid={ `${index}-ingredient-name-and-measure` }
//           >
//             <input
//               type="checkbox"
//               id={ key }
//               name={ key }
//               checked={ handleCheckbox }
//               onChange={ ({ target: checked }) => {
//                 handleCheckbox({ target: { checked } });
//               } }
//             />
//             { `${ingredients[key]} - ${ingredients[ingredientMeasureKeys[index]]}` }
//           </label>
//         )))}
//     </ul>
//   );
// }

// // IngredientListProgress.propTypes = {
// //   ingredients: PropTypes.objectOf(
// //     PropTypes.shape(),
// //   ).isRequired,
// // };
