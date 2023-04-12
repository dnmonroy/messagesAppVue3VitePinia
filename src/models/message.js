export default class Message {
  text; //message content
  dateSend; //date when the message was sent
  dateRead; //date when the message was read
  isDeleted; //controller if the message was deleted
  isRead; //if the message was read by the others persons
  isSent; //if the message was sent

  constructor(text, dateSend, dateRead, isDeleted, isRead, isSent) {
    this.text = text;
    this.dateSend = dateSend;
    this.dateRead = dateRead;
    this.isDeleted = isDeleted;
    this.isRead = isRead;
    this.isSent = isSent;
  }

  setIsRead(flag) {
    this.isRead = flag;
  }

  setIsSent(flag) {
    this.isSent = flag;
  }
}
