import { observable, action } from 'mobx';
import { auth } from '../services/base';

export default class User {

    constructor() {
        this.getCurrentUser()
    }

    @observable user = null;
    @observable loading = false;
    @observable error = null;

    @action signInUser(email, password, callback) {
        this.loading = true;
        auth().signInWithEmailAndPassword(email, password)
            .catch(error => {
                this.loading = false;
                return callback(false, error)
            }).then(account => {
                this.loading = false;
                return callback(true, account)
            })
    };
    @action signupUser(email, password, callback) {
        auth().createUserWithEmailAndPassword(email,password)
            .catch(error => {
                this.loading = false;
                return callback(false, error)
            }).then(account => {
                this.loading = false;
                return callback(true, account)
            })
    };

    @action getCurrentUser() {
        this.loading = true;
        auth().onAuthStateChanged(user => {
            this.loading = false;
            this.user = user;
        })
    }

    @action upDateDisplayName(name) {
        this.loading = true;
        auth().currentUser.updateProfile({
            displayName: name,
        }).then((user) => {
            this.loading = false;
        }).catch(function (error) {
            this.loading = false;
            this.error = error;
        });
    }

    @action userSignOut() {
        auth().signOut();
    }
}