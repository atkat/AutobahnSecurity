export type WeatherData = {
  name: string;
  sys: {
    country: string;
  };
  main: {
    temp: number;
    humidity: number;
  };
  weather: [
    {
      description: string;
    },
  ];
};
