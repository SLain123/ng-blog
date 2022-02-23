import { IUser } from '../../shared/types/user.interface';
import { IBackErrors } from '../../shared/types/backErrors.interface';

export interface IAuthState {
    isSubmitting: boolean;
    user: IUser | null;
    isLoggedIn: boolean | null;
    validationErrors: IBackErrors | null;
}
