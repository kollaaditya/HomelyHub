import a6a from 'mongoose';
import a6b from 'validator';
import a6c from 'bcrypt';
import a6d from 'crypto';
const userSchema = new a6a['Schema']({
    'name': {
        'type': String,
        'required': [
            !![],
            'Please\x20enter\x20your\x20name'
        ]
    },
    'email': {
        'type': String,
        'required': [
            !![],
            'Please\x20enter\x20your\x20email'
        ],
        'unique': !![],
        'lowercase': !![],
        'validate': [
            a6b['isEmail'],
            'Please\x20enter\x20a\x20valid\x20email\x20address'
        ]
    },
    'password': {
        'type': String,
        'required': [
            !![],
            'Please\x20enter\x20your\x20password'
        ],
        'minlength': [
            0x6,
            'Your\x20password\x20must\x20be\x20longer\x20than\x206\x20characters'
        ],
        'select': ![]
    },
    'passwordConfirm': {
        'type': String,
        'required': [
            !![],
            'Please\x20confirm\x20your\x20Password'
        ],
        'validate': {
            'validator': function (a) {
                return a === this['password'];
            },
            'message': 'Passwords\x20are\x20not\x20the\x20same!'
        }
    },
    'phoneNumber': {
        'type': String,
        'required': !![],
        'unique': !![]
    },
    'avatar': {
        'url': { 'type': String },
        'public_id': { 'type': String }
    },
    'passwordChangedAt': { 'type': Date },
    'passwordResetToken': String,
    'passwordResetExpires': Date
}, { 'timestamps': !![] });
userSchema['pre']('save', async function (a) {
    console.log('Pre-save middleware triggered');
    if (!this['isModified']('password')) {
        console.log('Password not modified, skipping hash');
        return a();
    }
    console.log('Hashing password...');
    this['password'] = await a6c['hash'](this['password'], 0xc);
    this['passwordConfirm'] = undefined;
    console.log('Password hashed successfully');
    a();
}), userSchema['methods']['correctPassword'] = async function (a, b) {
    return await a6c['compare'](a, b);
}, userSchema['methods']['changedPasswordAfter'] = function (a) {
    if (this['passwordChangedAt']) {
        const b = parseInt(this['passwordChangedAt']['getTime']() / 0x3e8, 0xa);
        return a < b;
    }
    return ![];
}, userSchema['methods']['createPasswordResetToken'] = function () {
    const a = a6d['randomBytes'](0x20)['toString']('hex');
    return this['passwordResetToken'] = a6d['createHash']('sha256')['update'](a)['digest']('hex'), this['passwordResetExpires'] = Date['now']() + 0xa * 0x3c * 0x3e8, a;
};
const User = a6a['model']('User', userSchema);
export {
    User
};