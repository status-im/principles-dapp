module.exports = {
  // default applies to all environments
  default: {
    enabled: false,
    provider: "whisper", // Communication provider. Currently, Embark only supports whisper
    available_providers: ["whisper"], // Array of available providers
    client: "geth"
  },
};
