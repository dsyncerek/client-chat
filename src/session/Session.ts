class Session {
  public static readonly storageKey: string = 'session';
  private readonly storage: Storage = localStorage;

  getSession(): string {
    return this.getSessionFromStorage() || this.createSession();
  }

  private createSession(): string {
    const session = this.getRandomString();
    this.saveSessionToStorage(session);
    return session;
  }

  private saveSessionToStorage(session: string): void {
    this.storage.setItem(Session.storageKey, session);
  }

  private getSessionFromStorage(): string | null {
    return this.storage.getItem(Session.storageKey);
  }

  private getRandomString(): string {
    return Math.random()
      .toString(16)
      .substr(2);
  }
}

export default Session;
