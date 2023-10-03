CREATE TABLE "Groupings"(
    "id" BIGINT NOT NULL,
    "student_id" BIGINT NOT NULL,
    "group_id" BIGINT NOT NULL
);
ALTER TABLE
    "Groupings" ADD PRIMARY KEY("id");
CREATE TABLE "Majors"(
    "id" BIGINT NOT NULL,
    "name" BIGINT NOT NULL
);
ALTER TABLE
    "Majors" ADD PRIMARY KEY("id");
CREATE TABLE "Groups"("id" BIGINT NOT NULL);
ALTER TABLE
    "Groups" ADD PRIMARY KEY("id");
CREATE TABLE "RSOs"(
    "id" BIGINT NOT NULL,
    "name" BIGINT NOT NULL
);
ALTER TABLE
    "RSOs" ADD PRIMARY KEY("id");
CREATE TABLE "Memberships"(
    "id" BIGINT NOT NULL,
    "student_id" BIGINT NOT NULL,
    "membership_id" BIGINT NOT NULL,
    "interest" BOOLEAN NOT NULL,
    "coed" BOOLEAN NOT NULL,
    "same_section" BOOLEAN NOT NULL
);
ALTER TABLE
    "Memberships" ADD PRIMARY KEY("id");
CREATE TABLE "Classes"(
    "crn" BIGINT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "semester" VARCHAR(255) NOT NULL,
    "subjectCode" BIGINT NOT NULL,
    "courseNumber" BIGINT NOT NULL
);
ALTER TABLE
    "Classes" ADD PRIMARY KEY("crn");
CREATE TABLE "Students"(
    "id" BIGINT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "netid" VARCHAR(255) NOT NULL,
    "major" BIGINT NOT NULL,
    "minor" BIGINT NOT NULL,
    "year" INTEGER NOT NULL,
    "pronouns" VARCHAR(255) NOT NULL,
    "location" VARCHAR(255) NULL
);
ALTER TABLE
    "Students" ADD PRIMARY KEY("id");
ALTER TABLE
    "Memberships" ADD CONSTRAINT "memberships_membership_id_foreign" FOREIGN KEY("membership_id") REFERENCES "RSOs"("id");
ALTER TABLE
    "Memberships" ADD CONSTRAINT "memberships_membership_id_foreign" FOREIGN KEY("membership_id") REFERENCES "Classes"("crn");
ALTER TABLE
    "Students" ADD CONSTRAINT "students_minor_foreign" FOREIGN KEY("minor") REFERENCES "Majors"("id");
ALTER TABLE
    "Groupings" ADD CONSTRAINT "groupings_group_id_foreign" FOREIGN KEY("group_id") REFERENCES "Groups"("id");
ALTER TABLE
    "Groupings" ADD CONSTRAINT "groupings_student_id_foreign" FOREIGN KEY("student_id") REFERENCES "Students"("id");
ALTER TABLE
    "Memberships" ADD CONSTRAINT "memberships_student_id_foreign" FOREIGN KEY("student_id") REFERENCES "Students"("id");
ALTER TABLE
    "Students" ADD CONSTRAINT "students_major_foreign" FOREIGN KEY("major") REFERENCES "Majors"("id");