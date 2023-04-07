export default class Message {
    messageText //message content
    isOwnerMessage //if the message is created by user logged
    dateSendMessage //date when the message was sent
    dateReadMessage //date when the message was read
    isDeleted //controller if the message was deleted
    isRead //if the message was read by the others persons
    isSent //if the message was sent

    constructor(messageText, isOwnerMessage, dateSendMessage, dateReadMessage, isDeleted, isRead, isSent) {
        this.messageText = messageText
        this.isOwnerMessage = isOwnerMessage
        this.dateSendMessage = dateSendMessage
        this.dateReadMessage = dateReadMessage
        this.isDeleted = isDeleted
        this.isRead = isRead
        this.isSent = isSent
    }

    setIsRead(flag) {
        this.isRead = flag
    }

    setIsSent(flag) {
        this.isSent = flag
    }

}