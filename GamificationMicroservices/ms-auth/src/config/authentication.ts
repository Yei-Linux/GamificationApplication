const authentication = {
  development: {
    jwtSignature: "pleaseChangeThisSecret",
    signOptions: {
        expiresIn: 3600
    },
  },
  prod: {
    jwtSignature: process.env.JWT_GENERATOR_SIGNATURE_SECRET,
    signOptions: {
        expiresIn: 3600
    },
  },
};

export { authentication }