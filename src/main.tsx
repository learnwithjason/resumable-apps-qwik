import { useStore, component$ } from '@builder.io/qwik';

import './global.css';

type PhotoProps = {
  state: any;
};

export const Photo = component$(({ state }: PhotoProps) => {
  return (
    <img src={state.photos[state.currentPhoto].src} alt={state.photos[state.currentPhoto].alt} />
  )
});

export const Main = component$(() => {
  const state = useStore({
    currentPhoto: 0,
    photos: [
      {
        src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80',
        alt: 'A beach at sunset',
      },
      {
        src: 'https://images.unsplash.com/photo-1460627390041-532a28402358?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        alt: 'A beach at sunset',
      },
      {
        src: 'https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        alt: 'A beach at sunset',
      },
    ]
  });

  return (
    <div>
      <h1>Photos from My Trip</h1>
      <ul>
        {state.photos.map((_photo, index) => (
          <li>
            <a
              href={`#${index}`}
              onClick$={() => {
                state.currentPhoto = index;
              }}
            >{index}</a>
          </li>
        ))}
      </ul>

      <Photo state={state} />
    </div>
  );
});
