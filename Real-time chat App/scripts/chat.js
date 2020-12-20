class Chatroom {
  constructor(room, username) {
    (this.room = room), (this.username = username);
    this.chats = db.collection("chats");
    this.unsub;
  }

  set promenaRoom(a) {
    this.room = a;
  }
  get preuzimanjeRoom() {
    return this.room;
  }

  set promeniUsername(a) {
    this.username = a;
  }
  get preuzimanjeUsername() {
    console.log(this.username);
    return this.username;
  }

  //adding new chat documents
  async addChat(message) {
    //format a chat object
    let date = new Date();
    let chat = {
      message: message,
      created_at: firebase.firestore.Timestamp.fromDate(date),
      room: this.room,
      username: this.username,
    };
    //save the chat document

    let response = await this.chats.add(chat);
    return response;
  }
  //setting up a real-time listener to get new chats

  ispis(callback) {
    this.unsub = this.chats
      .where("room", "==", this.room)
      .orderBy("created_at")
      .onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type === "added") {
            //update ui
            callback(change.doc.data());
          }
        });
      });
  }

  //update username

  updateUsername(username) {
    this.username = username;
    localStorage.setItem("username", username);
  }
  //update room

  updateRoom(room) {
    this.room = room;
    localStorage.setItem("room", room);

    if (this.unsub) {
      this.unsub();
    }
  }
}
