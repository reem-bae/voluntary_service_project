 const authService = {
  login: async (data) => {

    return {
      id: 1,
      name: "Admin User",
      role: "admin",
      token: "jwt_token_here",
    };
  },
};

export default authService;