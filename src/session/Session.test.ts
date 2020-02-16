import Session from './Session';

describe('Session', () => {
  let session: Session;

  beforeEach(() => {
    session = new Session();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create session when it does not exist', () => {
    jest.spyOn(Storage.prototype, 'getItem').mockReturnValue(null);
    jest.spyOn(Storage.prototype, 'setItem');

    const receivedSessionId = session.getSession();

    expect(receivedSessionId).toBeDefined();
    expect(localStorage.getItem).toBeCalledTimes(1);
    expect(localStorage.getItem).toBeCalledWith(Session.storageKey);
    expect(localStorage.setItem).toBeCalledTimes(1);
    expect(localStorage.setItem).toBeCalledWith(Session.storageKey, receivedSessionId);
  });

  it('should read session when it exists', () => {
    jest.spyOn(Storage.prototype, 'getItem').mockReturnValue('SESSION_ID');
    jest.spyOn(Storage.prototype, 'setItem');

    const receivedSessionId = session.getSession();

    expect(receivedSessionId).toBe('SESSION_ID');
    expect(localStorage.getItem).toBeCalledTimes(1);
    expect(localStorage.getItem).toBeCalledWith(Session.storageKey);
    expect(localStorage.setItem).toBeCalledTimes(0);
  });
});
