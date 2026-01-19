export default ({ onClick }) => {
  return (
    <div
      className='recipesItem --add'
      aria-label='Добавить рецепт'
    >
      <button
        className='recipesItem__add'
        onClick={onClick}
      >
        Добавить рецепт
      </button>
    </div>
  );
};
