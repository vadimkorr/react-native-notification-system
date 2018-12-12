import { observable, action, computed } from "mobx";

const testNotifications = [
  {
    id: "0",
    type: "success",
    title: "Lorem ipsum dolor",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id: "2",
    type: "info",
    title: "Lorem ipsum dolor",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id: "3",
    type: "warning",
    title: "Lorem ipsum dolor",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id: "4",
    type: "error",
    title: "Lorem ipsum dolor",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  }
];

export class NotificationsStore {
  @observable
  _notifications = [...testNotifications];

  @computed
  get notifications() {
    return this._notifications;
  }

  @action
  add(notification) {
    this._notifications = [...this._notifications, notification];
  }

  @action
  remove(removedNotification) {
    this._notifications = this._notifications.filter(
      notification => notification.id !== removedNotification.id
    );
  }
}
