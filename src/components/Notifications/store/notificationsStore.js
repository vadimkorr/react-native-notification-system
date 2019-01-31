import { observable, action, computed } from "mobx";

export class NotificationsStore {
  constructor(notifications) {
    this.notifications = [...notifications];
  }

  @observable
  notifications = [];

  @action
  add(notification) {
    this.notifications.push(notification);
  }

  @action
  remove(removedNotification) {
    this.notifications = this.notifications.filter(
      notification => notification.id !== removedNotification.id
    );
  }
}
