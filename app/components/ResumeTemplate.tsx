"use client";
import { Page, Text, View, Document, StyleSheet, Image, Font } from '@react-pdf/renderer';
import { ResumeData, ExperienceItem, EducationItem, QualificationItem } from '../types/resume';

interface ResumeTemplateProps {
  data: ResumeData;
  template: number;
}

// Register fonts
Font.register({
  family: 'Redhat Display',
  fonts: [
    { src: '/fonts/RedHatDisplay/RedHatDisplay-Light.ttf', fontWeight: 300 },
    { src: '/fonts/RedHatDisplay/RedHatDisplay-Regular.ttf', fontWeight: 400 },
    { src: '/fonts/RedHatDisplay/RedHatDisplay-Medium.ttf', fontWeight: 500 },
    { src: '/fonts/RedHatDisplay/RedHatDisplay-SemiBold.ttf', fontWeight: 600 },
    { src: '/fonts/RedHatDisplay/RedHatDisplay-Bold.ttf', fontWeight: 700 },
  ],
});

// Define colors
const COLORS = {
  darkBlue: '#213e60',      
  lightBlue: '#234e80',     
  darkText: '#213e60',      
  grayText: '#6b7280',      
  lightText: '#ffffff',     
  sectionBorder: '#7793b3'
};

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    fontSize: 11,
    lineHeight: 1.3,
    fontFamily: 'Redhat Display'
  },
  leftColumn: {
    width: '30%',
    backgroundColor: COLORS.darkBlue,
    color: COLORS.lightText,
    padding: 20,
    paddingTop: 30,
  },
  rightColumn: {
    width: '70%',
    padding: 14,
    paddingTop: 28,
  },
  photoContainer: {
    width: 90,
    height: 90,
    borderRadius: 50,
    borderWidth: 0.01,
    borderColor: COLORS.lightText,
    overflow: 'hidden',
    marginBottom: 20,
    alignSelf: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  photo: {
    width: 92,
    height: 92,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 500,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.sectionBorder,
    paddingBottom: 6,
    marginBottom: 10,
    color: COLORS.lightText,
    marginTop:10
  },
  contactText: {
    fontSize: 10,
    marginBottom: 5,
  },
  educationItem: {
    marginBottom: 10,
  },
  institution: {
    fontSize: 10,
    fontWeight: 600,
    marginBottom: 2,
  },
  degree: {
    fontSize: 9,
    marginBottom: 2
  },
  educationDate: {
    fontSize: 9,
  },
  skillItem: {
    fontSize: 9,
    marginBottom: 4,
    marginLeft: 10,
  },
  name: {
    fontSize: 23,
    fontWeight: 600,
    color: COLORS.darkText,
    textTransform: 'uppercase',
    marginBottom: 5,
  },
  surname: {
    fontSize: 23,
    fontWeight: 'normal',
    color: COLORS.darkText,
    textTransform: 'uppercase',
  },
  jobTitle: {
    fontSize: 11,
    color: COLORS.grayText,
    marginBottom: 30,
    marginTop: 12
  },
  sectionTitleRight: {
    fontSize: 12,
    fontWeight: 600,
    color: COLORS.darkText,
    borderBottomWidth: 1,
    borderBottomColor: '#d1d5db',
    paddingBottom: 6,
    marginBottom: 10,
  },
  summaryText: {
    fontSize: 9,
    fontWeight: 300,
    color: COLORS.darkText,
    marginBottom: 15,
  },
  experienceItem: {
    marginBottom: 12,
  },
  company: {
    fontSize: 12,
    fontWeight: 600,
    color: COLORS.darkText,
  },
  position: {
    fontSize: 9,
    color: COLORS.lightBlue,
    marginVertical: 3,
  },
  experienceDate: {
    fontSize: 9,
    fontWeight: 300,
    color: COLORS.grayText,
  },
  description: {
    fontSize: 9,
    fontWeight: 300,
    color: COLORS.darkText,
  },
  qualificationItem: {
    marginBottom: 10,
  },
  qualificationName: {
    fontSize: 10,
    fontWeight: 600,
    color: COLORS.darkText,
  },
  qualificationDate: {
    fontSize:9,
    fontWeight: 300,
    color: COLORS.grayText,
  },
  qualificationIssuer: {
    fontSize: 10,
    color: COLORS.darkText,
  },
});

export const ResumeTemplate = ({ data, template }: ResumeTemplateProps) => {
  if (template === 1) {
    return (
      <Document>
        <Page size="A4" style={styles.page}>
          {/* Left Column */}
          <View style={styles.leftColumn}>
            {data.personal.photo && (
              <View style={styles.photoContainer}>
                <Image src={data.personal.photo} style={styles.photo} />
              </View>
            )}

            <View>
              <Text style={styles.sectionTitle}>CONTACT</Text>
              <Text style={styles.contactText}>{data.personal.phone}</Text>
              <Text style={styles.contactText}>{data.personal.email}</Text>
              {data.personal.website && (
                <Text style={styles.contactText}>{data.personal.website}</Text>
              )}
              {data.personal.linkedin && (
                <Text style={styles.contactText}>{data.personal.linkedin}</Text>
              )}
            </View>

            <View>
              <Text style={styles.sectionTitle}>EDUCATION</Text>
              {data.education.map((edu: EducationItem) => (
                <View key={edu.id} style={styles.educationItem}>
                  <Text style={styles.institution}>{edu.institution}</Text>
                  <Text style={styles.degree}>{edu.degree}</Text>
                  <Text style={styles.educationDate}>
                    {edu.startDate} - {edu.endDate}
                  </Text>
                </View>
              ))}
            </View>

            <View>
              <Text style={styles.sectionTitle}>SKILLS</Text>
              {data.skills.map((skill: string, index: number) => (
                <Text key={index} style={styles.skillItem}>• {skill}</Text>
              ))}
            </View>
          </View>

          {/* Right Column */}
          <View style={styles.rightColumn}>
            <View>
              <Text style={styles.name}>
                {data.personal.name.toUpperCase()}{' '}
                <Text style={styles.surname}>{data.personal.surname.toUpperCase()}</Text>
              </Text>
              <Text style={styles.jobTitle}>{data.personal.jobTitle}</Text>
            </View>

            <View>
              <Text style={styles.sectionTitleRight}>SUMMARY</Text>
              <Text style={styles.summaryText}>{data.personal.summary}</Text>
            </View>

            <View>
              <Text style={styles.sectionTitleRight}>WORK EXPERIENCE</Text>
              {data.experience.map((exp: ExperienceItem) => (
                <View key={exp.id} style={styles.experienceItem}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.company}>{exp.company}</Text>
                    <Text style={styles.experienceDate}>
                      {exp.startDate} - {exp.endDate}
                    </Text>
                  </View>
                  <Text style={styles.position}>{exp.position}</Text>
                  <Text style={styles.description}>{exp.description}</Text>
                </View>
              ))}
            </View>

            {data.qualifications.length > 0 && (
              <View>
                <Text style={styles.sectionTitleRight}>QUALIFICATIONS</Text>
                {data.qualifications.map((qual: QualificationItem) => (
                  <View key={qual.id} style={styles.qualificationItem}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                      <Text style={styles.qualificationName}>{qual.name}</Text>
                      <Text style={styles.qualificationDate}>{qual.date}</Text>
                    </View>
                    <Text style={styles.qualificationIssuer}>{qual.issuer}</Text>
                  </View>
                ))}
              </View>
            )}
          </View>
        </Page>
      </Document>
    );
  }

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text>Template {template} not implemented yet</Text>
      </Page>
    </Document>
  );
};