import User from "../Modal/Modal.js";


export const createUser = async (req, res) => {
  try {
    const userData = new User(req.body);

    if (!userData) {
      return res.status(404).json({ message: "User Not Found" });
    }
    const saveUser = await userData.save()

    res.status(200).json(saveUser)

  } catch (error) {
    res.status(500).json({ error: error })
  }
}


export const getAllUser = async (req, res) => {
  try {
    const userData = await User.find()
    if (!userData) {
      res.status(404).json({ message: "Users data not fount" })
    }

    res.status(200).json(userData)
  } catch (error) {
    res.status(500).json({ error: error })
  }
}

export const getSingleUser = async (req, res) => {
  try {
    const id = req.params.id

    const getUser = await User.findById(id)

    if (!getUser) {
      res.status(404).json({ message: "User Data Not Fount" })
    }

    res.status(200).json(getUser)
  } catch (error) {
    res.status(500).json({ Error: error })
  }
}


export const updateUser = async (req, res) => {
  try {
    const id = req.params.id

    const userUpadate = await User.findById(id);
    if (!userUpadate) {
      res.status(404).json({ message: "User Not Fount" })
    }
    await User.findByIdAndUpdate(id, req.body, { new: true })
    res.status(200).json({ msg: "User Update Succssfully" })
  } catch (error) {
    res.status(500).json({ Error: error })
  }
}


export const userDelete = async (req, res) => {
  try {
    const id = req.params.id

    const userDelete = await User.findById(id)
    if (!userDelete) {
      res.status(404).json({ message: "User Not Fount" })
    }
    await User.findByIdAndDelete(id)
    res.status(200).json({ message: "User deleted successfully" })
  } catch (error) {
    res.status(500).json({ Error: error })
  }
}
