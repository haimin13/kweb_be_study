CREATE TABLE `users` (
    `id` varchar(20) not null,
    `pw` varchar(20) not null,
    `nickname` varchar(20) not null,
    `profile_photo_link` varchar(100),
    `status_msg` varchar(100),
    `deleted` tinyint not null default 0,
    `reg_date` date not null,
    primary key (`id`)
) engine=InnoDB default charset=utf8;

CREATE TABLE `channels` (
    `id` int not null auto_increment,
    `name` varchar(50) not null,
    `creator` varchar(20) not null,
    `link` varchar(100) not null,
    `capacity` int not null,
    `deleted` tinyint not null default 0,
    `creation_date` date not null,
    primary key (`id`),
    foreign key (`creator`) references users(`id`) on update cascade
) engine=InnoDB default charset=utf8;

CREATE TABLE `chats` (
    `id` int not null auto_increment,
    `content` varchar(500),
    `writer` varchar(20) not null,
    `channel` int not null,
    `creation_date` date not null,
    primary key (`id`),
    foreign key (`writer`) references users(`id`) on update cascade
) engine=InnoDB default charset=utf8;

CREATE TABLE `follows` (
    `id` int not null auto_increment,
    `follower` varchar(20) not null,
    `followee` varchar(20) not null,
    `follow_date` date not null,
    primary key (`id`),
    foreign key (`follower`) references users(`id`) on update cascade,
    foreign key (`followee`) references users(`id`) on update cascade
) engine=InnoDB default charset=utf8;

CREATE TABLE `blocks` (
    `id` int not null auto_increment,
    `blocker` varchar(20) not null,
    `blocked` varchar(20) not null,
    `block_date` date not null,
    primary key (`id`),
    foreign key (`blocker`) references users(`id`) on update cascade,
    foreign key (`blocked`) references users(`id`) on update cascade
) engine=InnoDB default charset=utf8;