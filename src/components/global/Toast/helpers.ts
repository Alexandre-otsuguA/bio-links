type Greetings = {
  afternoon: string;
  morning: string;
  night: string;
};

export const getCurrentGreeting = (greetings: Greetings) => {
  const hours = new Date().getHours();

  return hours > 11 && hours < 18
    ? greetings.afternoon
    : hours >= 18
      ? greetings.night
      : greetings.morning;
};
