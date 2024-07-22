import mongoose from 'mongoose'
const dashboardSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    takeme: {
      type: String,
    },
    number: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
)

const Dashboard = mongoose.model('Dashboard', dashboardSchema)
export default Dashboard
