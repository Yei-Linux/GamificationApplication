const authentication = {
  development: {
    jwtSignature: "pleaseChangeThisSecret",
    signOptions: {
        expiresIn: null
    },
  },
  prod: {
    jwtSignature: process.env.JWT_GENERATOR_SIGNATURE_SECRET,
    signOptions: {
        expiresIn: null
    },
  },
};

export { authentication }