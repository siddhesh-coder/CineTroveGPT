import { createUserWithEmailAndPassword } from "firebase/auth";

const newUser = async (auth, email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

export default newUser;
