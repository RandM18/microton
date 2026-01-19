import { useState } from "react";
// import reactLogo from './assets/react.svg'
import viteLogo from "/vite.svg";
import "./App.scss";
import Logo from "./components/Logo/Logo";
import Button from "./components/Button/Button";
import RecipesList from "./components/RecipesList/RecipesList";

function App() {
  const saveToTxt = () => {
    // 1) что именно писать в txt:
    // вариант A: JSON (самый простой и без потерь)
    const text = JSON.stringify(r, null, 2);

    // вариант B: “человекочитаемо” (раскомментируйте если нужно)
    // const text = r
    //   .map((x) =>
    //     [
    //       `id: ${x.id}`,
    //       `title: ${x.title}`,
    //       `poster: ${x.poster}`,
    //       `temp: ${x.temp}`,
    //       `h1: ${x.h1}`,
    //       `m1: ${x.m1}`,
    //       `c1: ${x.c1}`,
    //       `v1: ${x.v1}`,
    //       "----",
    //     ].join("\n")
    //   )
    //   .join("\n");

    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "recipes.txt";
    document.body.appendChild(a);
    a.click();
    a.remove();

    URL.revokeObjectURL(url);
  };

  return (
    <>
      <div
        className='app'
        role='application'
        aria-label='Редактор рецептов МИКРОТОН'
      >
        <header
          className='header'
          id='header'
        >
          <div className='header__inner container'>
            <div
              className='header__tools'
              aria-label='Действия с файлами'
            >
              <Button label='Открыть recepty.txt'>
                <svg
                  width='18'
                  height='18'
                  viewBox='0 0 24 24'
                  fill='none'
                >
                  <path
                    d='M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z'
                    stroke='currentColor'
                    strokeWidth='2'
                  />
                  <path
                    d='M3 10h18'
                    stroke='currentColor'
                    strokeWidth='2'
                    opacity='.65'
                  />
                </svg>
              </Button>

              <Button label='Открыть izbrannoe.txt'>
                <svg
                  width='18'
                  height='18'
                  viewBox='0 0 24 24'
                  fill='none'
                >
                  <path
                    d='M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1z'
                    stroke='currentColor'
                    strokeWidth='2'
                  />
                </svg>
              </Button>

              <Button
                label='Сохранить (записать в recepty.txt)'
                onClick={saveToTxt}
              >
                <svg
                  width='18'
                  height='18'
                  viewBox='0 0 24 24'
                  fill='none'
                >
                  <path
                    d='M17 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7l-4-4z'
                    stroke='currentColor'
                    strokeWidth='2'
                  />
                  <path
                    d='M7 3v6h10V3'
                    stroke='currentColor'
                    strokeWidth='2'
                    opacity='.7'
                  />
                  <path
                    d='M8 21v-7h8v7'
                    stroke='currentColor'
                    strokeWidth='2'
                    opacity='.7'
                  />
                </svg>
              </Button>
            </div>
            <div
              className='header__logo'
              aria-label='Логотип'
            >
              <Logo />
            </div>
          </div>
        </header>
        <main
          className='main'
          id='main'
        >
          <RecipesList />
        </main>
        <footer
          className='footer'
          id='footer'
        ></footer>
      </div>

      {/* <div class='page'>
        <div
          class='app'
          role='application'
          aria-label='Редактор рецептов МИКРОТОН'
        >
          <div class='topbar'>
            <div
              class='tools'
              aria-label='Действия с файлами'
            >
              <button
                class='icon-btn'
                title='Открыть recepty.txt'
                aria-label='Открыть recepty.txt'
              >
                <svg
                  class='ico'
                  width='18'
                  height='18'
                  viewBox='0 0 24 24'
                  fill='none'
                >
                  <path
                    d='M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z'
                    stroke='currentColor'
                    stroke-width='2'
                  />
                  <path
                    d='M3 10h18'
                    stroke='currentColor'
                    stroke-width='2'
                    opacity='.65'
                  />
                </svg>
              </button>
              <button
                class='icon-btn'
                title='Открыть izbrannoe.txt'
                aria-label='Открыть izbrannoe.txt'
              >
                <svg
                  class='ico'
                  width='18'
                  height='18'
                  viewBox='0 0 24 24'
                  fill='none'
                >
                  <path
                    d='M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1z'
                    stroke='currentColor'
                    stroke-width='2'
                  />
                </svg>
              </button>
              <button
                class='icon-btn'
                title='Сохранить (записать в recepty.txt)'
                aria-label='Сохранить'
              >
                <svg
                  class='ico'
                  width='18'
                  height='18'
                  viewBox='0 0 24 24'
                  fill='none'
                >
                  <path
                    d='M17 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7l-4-4z'
                    stroke='currentColor'
                    stroke-width='2'
                  />
                  <path
                    d='M7 3v6h10V3'
                    stroke='currentColor'
                    stroke-width='2'
                    opacity='.7'
                  />
                  <path
                    d='M8 21v-7h8v7'
                    stroke='currentColor'
                    stroke-width='2'
                    opacity='.7'
                  />
                </svg>
              </button>
            </div>

            <div
              class='brand'
              aria-label='Логотип'
            >
              <div class='logo'>
                <div>МИКРО</div>
                <div>ТОН.</div>
                <small>Recipe editor</small>
              </div>
            </div>
          </div>

          <div class='content'>
            <div class='list'>
              <section
                class='card active'
                aria-label='Рецепт 1'
              >
                <div class='thumb'>
                  <div
                    class='imgbox'
                    title='Выбор изображения рецепта'
                  >
                    <div
                      class='emoji'
                      aria-hidden='true'
                    >
                      🍕
                    </div>
                  </div>
                  <div class='name'>
                    <input
                      value='ПИЦЦА РИМСКАЯ'
                      aria-label='Название рецепта'
                    />
                    <div class='hint'>Кириллица, пробел, точка, запятая (пример).</div>
                  </div>
                </div>

                <div
                  class='table'
                  aria-label='Этапы приготовления'
                >
                  <div
                    class='thead'
                    role='row'
                  >
                    <div class='th'>#</div>
                    <div class='th'>Темп.</div>
                    <div class='th'>Время</div>
                    <div class='th'>Конв.</div>
                    <div class='th'>СВЧ</div>
                  </div>

                  <div class='rows'>
                    <div
                      class='row'
                      role='row'
                    >
                      <div class='idx'>1</div>
                      <div class='cell'>
                        <input
                          class='input'
                          value='275'
                          aria-label='Температура этап 1'
                        />
                        <small>°C</small>
                      </div>
                      <div class='cell'>
                        <input
                          class='input'
                          value='00:15'
                          aria-label='Время этап 1'
                        />
                      </div>
                      <div class='cell'>
                        <select
                          class='select'
                          aria-label='Конвекция этап 1'
                        >
                          <option>70%</option>
                        </select>
                      </div>
                      <div class='cell'>
                        <select
                          class='select'
                          aria-label='СВЧ этап 1'
                        >
                          <option>90%</option>
                        </select>
                      </div>
                    </div>
                    <div
                      class='row'
                      role='row'
                    >
                      <div class='idx'>2</div>
                      <div class='cell'>
                        <input
                          class='input'
                          value='275'
                          disabled
                          aria-label='Температура этап 2 (неактивно)'
                        />
                        <small>°C</small>
                      </div>
                      <div class='cell'>
                        <input
                          class='input'
                          value='00:45'
                          aria-label='Время этап 2'
                        />
                      </div>
                      <div class='cell'>
                        <select
                          class='select'
                          aria-label='Конвекция этап 2'
                        >
                          <option>70%</option>
                        </select>
                      </div>
                      <div class='cell'>
                        <select
                          class='select'
                          aria-label='СВЧ этап 2'
                        >
                          <option>80%</option>
                        </select>
                      </div>
                    </div>
                    <div
                      class='row'
                      role='row'
                    >
                      <div class='idx'>3</div>
                      <div class='cell'>
                        <input
                          class='input'
                          value='275'
                          disabled
                          aria-label='Температура этап 3 (неактивно)'
                        />
                        <small>°C</small>
                      </div>
                      <div class='cell'>
                        <input
                          class='input'
                          value='00:15'
                          aria-label='Время этап 3'
                        />
                      </div>
                      <div class='cell'>
                        <select
                          class='select'
                          aria-label='Конвекция этап 3'
                        >
                          <option>100%</option>
                        </select>
                      </div>
                      <div class='cell'>
                        <select
                          class='select'
                          aria-label='СВЧ этап 3'
                        >
                          <option>70%</option>
                        </select>
                      </div>
                    </div>
                    <div
                      class='row'
                      role='row'
                    >
                      <div class='idx'>4</div>
                      <div class='cell'>
                        <input
                          class='input'
                          value='275'
                          disabled
                          aria-label='Температура этап 4 (неактивно)'
                        />
                        <small>°C</small>
                      </div>
                      <div class='cell'>
                        <input
                          class='input'
                          value='01:15'
                          aria-label='Время этап 4'
                        />
                      </div>
                      <div class='cell'>
                        <select
                          class='select'
                          aria-label='Конвекция этап 4'
                        >
                          <option>100%</option>
                        </select>
                      </div>
                      <div class='cell'>
                        <select
                          class='select'
                          aria-label='СВЧ этап 4'
                        >
                          <option>0%</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <aside class='right'>
                  <div class='vstack'>
                    <button
                      class='pill star'
                      title='В избранное'
                      aria-label='В избранное'
                    >
                      ★
                    </button>
                    <button
                      class='pill danger'
                      title='Удалить рецепт'
                      aria-label='Удалить рецепт'
                    >
                      🗑
                    </button>
                  </div>
                  <div class='divider'></div>
                  <div class='move'>
                    <button
                      class='pill'
                      title='Вверх'
                      aria-label='Переместить вверх'
                    >
                      ˄
                    </button>
                    <button
                      class='pill'
                      title='Вниз'
                      aria-label='Переместить вниз'
                    >
                      ˅
                    </button>
                  </div>
                </aside>
              </section>

              <div
                class='add'
                role='button'
                aria-label='Добавить рецепт'
              >
                <div
                  class='plus'
                  aria-hidden='true'
                >
                  +
                </div>
                <div>Добавить рецепт</div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default App;
