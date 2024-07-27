import mongoose from "mongoose";
import validator from 'validator';
const { ObjectId } = mongoose.Schema.Types;
const { Schema } = mongoose; 

const userSchema = new Schema(
    {
        // for user full name
        name: {
          type: String,
          required: [true, "Please, provide your full name"],
          trim: true,
          maxLength: [100, "Your name would be at most 100 characters"],
        },
    
        // for user email
        email: {
          type: String,
          required: [true, "Please, provide your email address"],
          validate: [validator.isEmail, "Provide a valid email address"],
          unique: [true, "Email already exist. Please, provide new"],
        },
    
        // for user initial password
        password: {
            type: String,
            required: false,
            validate: {
              validator: function(value: string) {
                // Only validate if a password is provided
                if (value) {
                  return validator.isStrongPassword(value, {
                    minUppercase: 1,
                    minLowercase: 1,
                    minNumbers: 1,
                    minSymbols: 1,
                  });
                }
                return true; // If no password, validation passes
              },
              message:
                "Password should contain minimum 1 => uppercase, lowercase, number and symbol",
            },
            minLength: [8, "Password should be at least 8 characters"],
            maxLength: [20, "Password should be at most 20 characters"],
          },
    
        // for user confirm password
        confirmPassword: {
          type: String,
          required: [false, "Please, retype your password to confirm"],
        },
    
        // for user avatar
        avatar: {
          url: {
            type: String,
            // validate: [validator.isURL, "Please provide a valid avatar URL"],
            default: "",
          },
          public_id: {
            type: String,
            default: "",
          },
        },
    
        // for user gender
        gender: {
          type: String,
          enum: {
            values: ["male", "female", "binary", "rather not say"],
            message: "Gender would be male/female/binary",
          },
            default: "rather not say",
        },
    
        // for user contact number
        phone: {
          type: String,
        //   required: [
        //     false,
        //     "Please, provide your phone number, i.e.: +234xxxxxxxxx",
        //   ],
        //   validate: {
        //     validator: (value: string) =>
        //       validator.isMobilePhone(value, "bn-BD", { strictMode: true }),
        //     message:
        //       "Phone number {VALUE} is not valid. Please, retry like +234xxxxxxxxx",
        //   },
          default: ""
        },
    
        // for user role to be played
        role: {
          type: String,
          enum: ["admin", "buyer", "seller"],
          default: "buyer",
        },
    
        // for user account status
        status: {
          type: String,
          enum: ["active", "inactive"],
          default: "active",
        },
    
        // for user address
        address: {
          type: String,
          required: false,
          trim: true,
          maxLength: [500, "Your address would be at most 500 characters"],
        },
    
        // for user date of birth
        dob: {
          type: Date,
          required: false,
        },
    
        // for carting orders
        cart: [
          {
            product: {
              type: ObjectId,
              ref: "Product",
            },
            quantity: {
              type: Number,
              min: [1, "Quantity won't be less than 1"],
            },
            cartedAt: {
              type: Date,
              default: Date.now,
            },
          },
        ],
    
        // for store creation
        store: {
          type: ObjectId,
          ref: "Store",
        },
    
        // for user account time stamps
        createdAt: {
          type: Date,
          default: Date.now,
        },
        updatedAt: {
          type: Date,
          default: Date.now,
        },

    },
    { timestamps: true }
)

userSchema.methods.speak = function speak() {
    const greeting = this.fullName
      ? 'Hello name is ' + this.fullName
      : 'I don\'t have a name';
    console.log(greeting);
  };

export default mongoose.models.User || mongoose.model("User", userSchema);