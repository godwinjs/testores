import User from "@/app/db/models/User";

/* find by email */
export const findByEmail = async (email: string) => {

    try {
        const user = await User.findOne({ email });
    
        if (!user) {
          return 'User not found';
        }
    
        return user;
      } catch (err) {
        return 'Error finding user';
      }
}

export const updateUser = async (email: string, data: any ) => {
    // console.log([email, data])
    // return email;
    try {
        const updatedUser = User.findOneAndUpdate({email: email}, data, { new: true, upsert: false });
    
        if (!updatedUser) {
          return 'User not found';
        }
    
        return updatedUser;
      } catch (err) {
        return 'Error updating user';
      }
}

export const updateOrders = async (email: string, data: any ) => {
    try {
        const updatedUser = await User.findOneAndUpdate(
          { email }, // Find user by email
          { $push: { orders: data.order } }, // Add new order to the orders array
          { new: true, upsert: false } // Return the updated user, do not create a new user if email is not found
        );
    
        if (!updatedUser) {
          return 'User not found';
        }
    
        return updatedUser; // Return the updated user object
      } catch (err) {
        return 'Error updating orders';
      }
}