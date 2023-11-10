package slackbot;

public class Task {
    private String message;
    public Status status;
    private String participant;

    public Task(String message, Status status, String participant) {
        this.message = message;
        this.status = status;
        this.participant = participant;
    }


    public String getMessage() {
        return this.message;
    }


    public Status getStatus() {
        return this.status;
    }


    public String getParticipant() {
        return this.participant;
    }
    // ...

}
