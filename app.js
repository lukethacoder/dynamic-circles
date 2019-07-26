const arrayOfItems = [
  "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen"
]

const main = () => {
  let cont = document.querySelector( '.circles__container' );

  const svg = `
    <svg style="max-width: 48px;" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="50"/>
  </svg>`;

  let type = 1;
  let start = -90;
  let radius = '180px';

  const min = 3;
  const max = 14;
  const howManyShouldWeRender = Math.floor( Math.random() * ( max - min + 1 ) + min );
  const shouldBeRandom = true;

  if ( shouldBeRandom ) {

    let slice = 360 * type / howManyShouldWeRender;

    for ( i = 0; i < howManyShouldWeRender; i++ ) {
      let rotate = slice * i + start;
      let rotateReverse = rotate * -1;

      let circle = document.createElement( 'div' );
      circle.classList.add( 'item' )

      circle.style.transform = `rotate(${rotate}deg) translate(${radius}) rotate(${rotateReverse}deg)`;

      let p = document.createElement( 'p' );
      p.innerText = arrayOfItems[i];

      circle.innerHTML = svg;
      circle.appendChild( p );

      circle.addEventListener( 'click', ( e ) => changeCenterContent( e ) )

      cont.appendChild( circle );

    }
  } else {

    const length = arrayOfItems.length;

    let slice = 360 * type / length;

    arrayOfItems.forEach( ( item, key ) => {
      let rotate = slice * key + start;
      let rotateReverse = rotate * -1;

      let circle = document.createElement( 'div' );
      circle.classList.add( 'item' )

      circle.style.transform = `rotate(${rotate}deg) translate(${radius}) rotate(${rotateReverse}deg)`;

      let p = document.createElement( 'p' );
      p.innerText = item;

      circle.innerHTML = svg;
      circle.appendChild( p );

      circle.addEventListener( 'click', ( e ) => changeCenterContent( e, item ) )

      cont.appendChild( circle );

    } );
  }
}

const changeCenterContent = ( e ) => {
  document.querySelector( '.center' ).innerText = e.target.querySelector( 'p' ).innerText;
}

window.addEventListener( 'DOMContentLoaded', () => {
  main();
} );
