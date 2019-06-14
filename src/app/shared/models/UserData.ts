export class UserData {
    private _uid: string;
    private _email: string;
    private _displayName: string;
    private _photoURL: string;
    private _emailVerified: boolean;


    constructor(uid: string, email: string, displayName: string, photoURL: string, emailVerified: boolean) {
        this._uid = uid;
        this._email = email;
        this._displayName = displayName;
        this._photoURL = photoURL;
        this._emailVerified = emailVerified;
    }

    get uid(): string {
        return this._uid;
    }

    get email(): string {
        return this._email;
    }

    get displayName(): string {
        return this._displayName;
    }

    get photoURL(): string {
        return this._photoURL;
    }

    get emailVerified(): boolean {
        return this._emailVerified;
    }
}