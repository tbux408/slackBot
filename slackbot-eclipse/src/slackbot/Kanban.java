package slackbot;

import java.util.ArrayList;

public class Kanban {

    private ArrayList<Task> todo;
    private ArrayList<Task> inpo;
    private ArrayList<Task> done;

    public Kanban() {
        todo = new ArrayList<Task>();
        done = new ArrayList<Task>();
        inpo = new ArrayList<Task>();

    }


    public void update(Task oldTask, Task newTask) {
        addTask(newTask);
        removeTask(oldTask);
    }


    public void addTask(Task task) {
        if (task.getStatus() == Status.DONE) {
            done.add(task);
        }
        else if (task.getStatus() == Status.TODO) {
            todo.add(task);
        }
        else {
            inpo.add(task);
        }
    }


    public void removeTask(Task task) {
        if (task.getStatus() == Status.DONE) {
            done.remove(task);
        }
        else if (task.getStatus() == Status.TODO) {
            todo.remove(task);
        }
        else {
            inpo.remove(task);
        }
    }


    public ArrayList<Task> getTodo() {
        return this.todo;
    }


    public ArrayList<Task> getDone() {
        return this.done;
    }


    public ArrayList<Task> getInpo() {
        return this.inpo;
    }

}
