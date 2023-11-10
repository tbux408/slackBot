package slackbot;

public class MatchingAlgorithm {

    private Kanban kanban;

    public MatchingAlgorithm() {
        kanban = new Kanban();
    }


    public boolean matchTask(Task task) {
        boolean found = false;

        // find the task in the kanban board and update the kanban
        // ...
        kanban.update(kanban.getDone().get(0), task);

        return found;
    }

}
