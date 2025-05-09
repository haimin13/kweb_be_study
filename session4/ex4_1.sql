CREATE TABLE `students` (
  `name` varchar(20) NOT NULL,
  `admission_year` int(4) NOT NULL,
  `major` varchar(20) NOT NULL,
  `discrete_no` int(4) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `address` varchar(100) NOT NULL,
  `total_credit` int(11) NOT NULL DEFAULT 0,
  `gpa` double NOT NULL DEFAULT 0,
  `presence` tinyint(4) NOT NULL DEFAULT 1,
  PRIMARY KEY (`admission_year`,`major`,`discrete_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
