import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn , Unique} from "typeorm";
import { ChallengeComplete } from "./ChallengeComplete";
import {Stand} from "./Stand"



@Entity({name:"challenge"})
export class Challenge {

    @PrimaryGeneratedColumn({name: "challenge_id"})
    id: number;

    @Column({name: "url_video"})
    url_video: string;
    

    @OneToMany( () => ChallengeComplete, ChallengeComplete=>ChallengeComplete.challenges)
    challengeComplete: ChallengeComplete;

    @ManyToOne(()=>Stand, stand=>stand.challenge)
    @JoinColumn({name:"stand_id"})
    stand: Stand;
}