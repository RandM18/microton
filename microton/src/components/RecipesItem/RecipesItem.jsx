import Button from "../Button/Button";
import Table from "../Table/Table";
import "./RecipesItem.scss";
export default ({ id, poster, title, data, index, onMoveUp, onMoveDown, total }) => {
  return (
    <div
      className='recipesItem'
      aria-label='Рецепт 1'
    >
      <div className='recipesItem__info'>
        <div className='recipesItem__poster'>
          <img
            src={poster}
            alt='poster'
          />
        </div>
        <div className='recipesItem__title'>{title}</div>
        {index}
      </div>

      <div className='recipesItem__body'>
        <Table data={data} />
      </div>
      <div className='recipesItem__aside'>
        <Button label='В избранное'>★</Button>
        <Button label='Удалить рецепт'>🗑</Button>
        <div className='divider'></div>
        <Button
          label='Переместить вверх'
          onClick={onMoveUp}
          disabled={index === 0}
        >
          ˄
        </Button>
        <Button
          label='Переместить вниз'
          onClick={onMoveDown}
          disabled={index === total - 1}
        >
          ˅
        </Button>
      </div>
    </div>
  );
};
