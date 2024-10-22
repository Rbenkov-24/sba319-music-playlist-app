const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /.+\@.+\..+/
  },
  password: {
    type: String,
    required: true
  },
  playlists: [
    {
      type: mongoose.Schema.Types.ObjectId, //refrence the Playlist
      ref: 'Playlist'  
    },
  ],
  profilePicture: {
    type: String,
    default: "defaultProfilePic.png"
  }
});


const User = mongoose.model('User', userSchema);

module.exports = User;