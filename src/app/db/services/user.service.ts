import User from "@/app/db/models/User";

/* find by email */
export const findByEmail = async (email: string) => {
    return await User.findOne({ email });
}

export const updateUser = async (email: string, data: any ) => {
    // console.log([email, data])
    // return email;
    return await User.findOneAndUpdate({email: email}, data)
}