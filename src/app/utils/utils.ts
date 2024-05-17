export const Utils = {
  msConversion: (time: number) => {
    let seconds = time / 1000;
    let secondsLeftOver = Math.round(seconds % 60);

    let mins = (seconds - secondsLeftOver) / 60;

    if (secondsLeftOver < 10) {
      return `${Math.round(mins)}:0${secondsLeftOver}`;
    }

    return `${Math.round(mins)}:${secondsLeftOver}`;
  },
};
