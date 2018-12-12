import { observable, action, computed } from "mobx";

export class NotificationsStore {
  constructor(notifications) {
    this._notifications = [...notifications];
  }

  @observable
  _notifications = [];

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
