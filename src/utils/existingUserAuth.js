import { signInWithEmailAndPassword } from "firebase/auth";

const existingUser = async (auth, email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

export default existingUser;
