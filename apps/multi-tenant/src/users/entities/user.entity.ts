import { IsEmail } from 'class-validator';
import { Membership } from 'src/memberships/entities/membership.entity';
import { Profile } from 'src/profiles/entities/profile.entity';
import { Role } from 'src/roles/entities/role.entity';
import { Session } from 'src/sessions/session.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  DeleteDateColumn,
  OneToMany,
  ManyToMany,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  firstName: string;

  @Column({ nullable: false })
  lastName: string;

  @Column({ nullable: false, unique: true })
  username: string;

  @Column({ nullable: false, unique: true })
  @IsEmail()
  email: string;

  @Column({ nullable: false })
  password: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ default: false })
  isVerified: boolean;

  @Column({ default: false })
  isEmailVerified: boolean;

  @DeleteDateColumn()
  deletedAt?: Date;

  @OneToOne(() => Profile, (profile) => profile.user)
  @JoinColumn() // user is owning side
  profile: Profile;

  @OneToMany(() => Session, (session) => session.user)
  sessions: Session[];

  @OneToMany(() => Membership, (membership) => membership.user)
  memberships: Membership[];

  @ManyToMany(() => Role, (role) => role.users)
  roles: Role[];
}
