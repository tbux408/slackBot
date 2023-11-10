package slackbot;

public class Reader {

    Task task;

    public Reader(String slackChat) {
        MatchingAlgorithm ma = new MatchingAlgorithm();

        while (true) { // check the slackchat
            this.task = readSlack(slackChat);

            if (ma.matchTask(task)) {
                // print to slack success
            }
            else {
                // print to slack failure
            }
        }

    }


    private Task readSlack(String slackChat) {

        String message = "placeholder message"; // Connect to slack bot
        Status stat = Status.TODO; // Connect to the slack bot
        String participant = "name";

        Task task = new Task(message, stat, participant);

        return task;
    }
}
