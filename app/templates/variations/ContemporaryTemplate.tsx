import { Document, Page, View, Text, StyleSheet, Image, Svg, Path } from '@react-pdf/renderer';
import { ResumeData } from '@/app/types/resume';

// Improved Icon components
const BriefcaseIcon = ({ color = '#ff6b6b', size = 12 }) => (
    <Svg width={size} height={size} viewBox="0 0 24 24">
        <Path
            d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
            fill="none"
            stroke={color}
            strokeWidth={2}
        />
    </Svg>
);

const GraduationCapIcon = ({ color = '#ff6b6b', size = 12 }) => (
    <Svg width={size} height={size} viewBox="0 0 24 24">
        <Path
            d="M22 10v6M2 10l10-5 10 5-10 5z M6 12v5c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-5"
            fill="none"
            stroke={color}
            strokeWidth={2}
        />
    </Svg>
);

const AwardIcon = ({ color = '#ff6b6b', size = 12 }) => (
    <Svg width={size} height={size} viewBox="0 0 24 24">
        <Path
            d="M17 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z M7 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z M12 15l3.38 1.69a1 1 0 0 0 1.36-1.05l-.5-3.84 2.13-2.37a1 1 0 0 0-.24-1.53l-3.27-1.61L12 3l-1.86 3.29-3.27 1.61a1 1 0 0 0-.24 1.53l2.13 2.37-.5 3.84a1 1 0 0 0 1.36 1.05L12 15z"
            fill="none"
            stroke={color}
            strokeWidth={2}
        />
    </Svg>
);

const PortfolioIcon = ({ color = '#ff6b6b', size = 12 }) => (
    <Svg width={size} height={size} viewBox="0 0 24 24">
        <Path
            d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
            fill="none"
            stroke={color}
            strokeWidth={2}
        />
    </Svg>
);

const CodeIcon = ({ color = '#ff6b6b', size = 12 }) => (
    <Svg width={size} height={size} viewBox="0 0 24 24">
        <Path
            d="M16 18l6-6-6-6 M8 6l-6 6 6 6"
            fill="none"
            stroke={color}
            strokeWidth={2}
        />
    </Svg>
);

const GlobeIcon = ({ color = '#4ecdc4', size = 12 }) => (
    <Svg width={size} height={size} viewBox="0 0 24 24">
        <Path
            d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5M2 12h20"
            fill="none"
            stroke={color}
            strokeWidth={2}
        />
    </Svg>
);

const PhoneIcon = ({ color = '#4ecdc4', size = 12 }) => (
    <Svg width={size} height={size} viewBox="0 0 24 24">
        <Path
            d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
            fill="none"
            stroke={color}
            strokeWidth={2}
        />
    </Svg>
);

const MailIcon = ({ color = '#4ecdc4', size = 12 }) => (
    <Svg width={size} height={size} viewBox="0 0 24 24">
        <Path
            d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6"
            fill="none"
            stroke={color}
            strokeWidth={2}
        />
    </Svg>
);

const LinkedinIcon = ({ color = '#4ecdc4', size = 12 }) => (
    <Svg width={size} height={size} viewBox="0 0 24 24">
        <Path
            d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
            fill="none"
            stroke={color}
            strokeWidth={2}
        />
    </Svg>
);



const styles = StyleSheet.create({
    page: {
        padding: 30,
        fontSize: 10,
        fontFamily: 'Helvetica',
        color: '#2a4365'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 20
    },
    photoContainer: {
        width: 103,
        height: 103,
        borderRadius: 52,
        borderWidth: 0.01,
        borderColor: '#ffffff',
        overflow: 'hidden',
        marginRight: 15,
        position: 'relative',
        backgroundColor: '#f3f4f6'
    },
    photo: {
        width: 105,
        height: 105
    },
    redDot: {
        position: 'absolute',
        bottom: -8,
        right: -50,
        width: 20,
        height: 20,
        backgroundColor: '#ff6b6b',
        borderRadius: 10
    },
    tealDot: {
        position: 'absolute',
        bottom: -15,
        right: -15,
        width: 15,
        height: 15,
        backgroundColor: '#4ecdc4',
        borderRadius: 7.5
    },
    nameContainer: {
        flex: 1,
        paddingTop: 20
    },
    name: {
        fontSize: 30,
        fontWeight: 'thin',
        marginBottom: 2
    },
    surname: {
        fontWeight: 'medium',
        color: '#4ecdc4'
    },
    jobTitle: {
        fontSize: 14,
        color: '#ff6b6b',
        fontWeight: 'medium'
    },
    twoColumn: {
        flexDirection: 'row',
        marginTop: 10
    },
    leftColumn: {
        width: '40%',
        paddingRight: 15
    },
    rightColumn: {
        width: '60%'
    },
    sectionTitle: {
        fontSize: 10,
        fontWeight: 'bold',
        marginBottom: 8,
        flexDirection: 'row',
        alignItems: 'center'
    },
    titleAccent: {
        width: 15,
        height: 1,
        backgroundColor: '#ff6b6b',
        marginRight: 5
    },
    contactContainer: {
        backgroundColor: '#f8fbff',
        borderRadius: 5,
        padding: 12,
        marginBottom: 15
    },
    contactItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 8,
        fontSize: 9
    },
    contactIcon: {
        width: 12,
        height: 12,
        marginRight: 5,
        marginTop: 1
    },
    skillsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 15
    },
    skillItem: {
        width: '50%',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
        fontSize: 9
    },
    skillBullet: {
        width: 7,
        height: 7,
        backgroundColor: '#4ecdc4',
        borderRadius: 3.5,
        marginRight: 5
    },
    educationItem: {
        marginBottom: 12,
        paddingLeft: 15,
        position: 'relative'
    },
    timelineDot: {
        position: 'absolute',
        left: 0,
        top: 4,
        width: 9,
        height: 9,
        backgroundColor: '#4ecdc4',
        borderRadius: 4.5
    },
    institution: {
        fontSize: 9,
        fontWeight: 'semibold',
        marginBottom: 2
    },
    degree: {
        fontSize: 9,
        color: '#ff6b6b',
        marginBottom: 2
    },
    educationDate: {
        fontSize: 8,
        color: '#6b7280'
    },
    certificationContainer: {
        marginTop: 15
    },
    certificationGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    certificationItem: {
        width: '48%',
        backgroundColor: '#f0f7ff',
        borderRadius: 5,
        padding: 8,
        marginBottom: 8
    },
    certificationName: {
        fontSize: 9,
        fontWeight: 'medium',
        marginBottom: 2
    },
    certificationIssuer: {
        fontSize: 9,
        color: '#ff6b6b',
        marginBottom: 2
    },
    certificationDate: {
        fontSize: 8,
        color: '#6b7280'
    },
    summaryContainer: {
        backgroundColor: '#f8fbff',
        borderRadius: 5,
        padding: "15px 12px",
        marginBottom: 15
    },
    summaryTitle: {
        fontSize: 10,
        fontWeight: 'bold',
        marginBottom: 5
    },
    summaryText: {
        fontSize: 9,
        lineHeight: 1.4
    },
    experienceItem: {
        marginBottom: 12,
        paddingLeft: 15,
        position: 'relative'
    },
    position: {
        fontSize: 9,
        fontWeight: 'semibold',
        marginBottom: 2
    },
    company: {
        fontSize: 9,
        color: '#ff6b6b',
        marginBottom: 2
    },
    experienceDate: {
        fontSize: 8,
        color: '#6b7280',
        marginBottom: 3
    },
    description: {
        fontSize: 9,
        lineHeight: 1.4
    },

    decorativeDotOrange: {
        position: 'absolute',
        bottom: -8,
        right: -8,
        width: 16,
        height: 16,
        backgroundColor: '#ff6b6b',
        borderRadius: 8
    },
    decorativeDotTeal: {
        position: 'absolute',
        bottom: -16,
        right: -16,
        width: 12,
        height: 12,
        backgroundColor: '#4ecdc4',
        borderRadius: 6
    }
});

export const ContemporaryTemplate = ({ data }: { data: ResumeData }) => {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                {/* Header with Photo */}
                <View style={styles.header}>
                    <View style={styles.photoContainer}>
                        {data.personal.photo && (
                            <Image src={data.personal.photo} style={styles.photo} />
                        )}
                        {/* Fixed decorative dots */}
                        <View style={styles.decorativeDotOrange} />
                        <View style={styles.decorativeDotTeal} />
                    </View>

                    <View style={styles.nameContainer}>
                        <Text style={styles.name}>
                            {data.personal.name}{' '}
                            <Text style={styles.surname}>{data.personal.surname}</Text>
                        </Text>
                        <Text style={styles.jobTitle}>{data.personal.jobTitle}</Text>
                    </View>
                </View>

                {/* Two Column Layout */}
                <View style={styles.twoColumn}>
                    {/* Left Column */}
                    <View style={styles.leftColumn}>
                        {/* Contact Section */}
                        <View style={styles.contactContainer}>
                            <View style={styles.sectionTitle}>
                                <View style={styles.titleAccent} />
                                <Text>CONTACT</Text>
                            </View>

                            <View style={styles.contactItem}>
                                <View style={styles.contactIcon}>
                                    <PhoneIcon />
                                </View>
                                <Text>{data.personal.phone}</Text>
                            </View>

                            <View style={styles.contactItem}>
                                <View style={styles.contactIcon}>
                                    <MailIcon />
                                </View>
                                <Text>{data.personal.email}</Text>
                            </View>

                            {data.personal.website && (
                                <View style={styles.contactItem}>
                                    <View style={styles.contactIcon}>
                                        <GlobeIcon />
                                    </View>
                                    <Text>{data.personal.website}</Text>
                                </View>
                            )}

                            {data.personal.linkedin && (
                                <View style={styles.contactItem}>
                                    <View style={styles.contactIcon}>
                                        <LinkedinIcon />
                                    </View>
                                    <Text>{data.personal.linkedin}</Text>
                                </View>
                            )}
                        </View>

                        {/* Skills Section */}
                        <View>
                            <View style={styles.sectionTitle}>
                                <View style={styles.contactIcon}>
                                    <CodeIcon />
                                </View>
                                <Text>SKILLS</Text>
                            </View>

                            <View style={styles.skillsContainer}>
                                {data.skills.map((skill, index) => (
                                    <View key={index} style={styles.skillItem}>
                                        <View style={styles.skillBullet} />
                                        <Text>{skill}</Text>
                                    </View>
                                ))}
                            </View>
                        </View>

                        {/* Education Section */}
                        <View>
                            <View style={styles.sectionTitle}>
                                <View style={styles.contactIcon}>
                                    <GraduationCapIcon />
                                </View>
                                <Text>EDUCATION</Text>
                            </View>

                            {data.education.map((edu, index) => (
                                <View key={index} style={styles.educationItem}>
                                    <View style={styles.timelineDot} />
                                    <Text style={styles.institution}>{edu.institution}</Text>
                                    <Text style={styles.degree}>{edu.degree}</Text>
                                    <Text style={styles.educationDate}>
                                        {edu.startDate} - {edu.endDate}
                                    </Text>
                                </View>
                            ))}
                        </View>

                        {/* Certifications Section */}
                        {data.qualifications.length > 0 && (
                            <View style={styles.certificationContainer}>
                                <View style={styles.sectionTitle}>
                                    <View style={styles.contactIcon}>
                                        <AwardIcon />
                                    </View>
                                    <Text>CERTIFICATIONS</Text>
                                </View>

                                <View style={styles.certificationGrid}>
                                    {data.qualifications.map((qual, index) => (
                                        <View key={index} style={styles.certificationItem}>
                                            <Text style={styles.certificationName}>{qual.name}</Text>
                                            <Text style={styles.certificationIssuer}>{qual.issuer}</Text>
                                            <Text style={styles.certificationDate}>{qual.date}</Text>
                                        </View>
                                    ))}
                                </View>
                            </View>
                        )}
  
                    </View>

                    {/* Right Column */}
                    <View style={styles.rightColumn}>
                        {/* Summary Section */}
                        <View style={styles.summaryContainer}>
                            <Text style={styles.summaryTitle}>PROFESSIONAL PROFILE</Text>
                            <Text style={styles.summaryText}>{data.personal.summary}</Text>
                        </View>

                        {/* Experience Section */}
                        <View>
                            <View style={styles.sectionTitle}>
                                <View style={styles.contactIcon}>
                                    <BriefcaseIcon />
                                </View>
                                <Text>EXPERIENCE</Text>
                            </View>

                            {data.experience.map((exp, index) => (
                                <View key={index} style={styles.experienceItem}>
                                    <View style={styles.timelineDot} />
                                    <Text style={styles.position}>{exp.position}</Text>
                                    <Text style={styles.company}>{exp.company}</Text>
                                    <Text style={styles.experienceDate}>
                                        {exp.startDate} - {exp.endDate}
                                    </Text>
                                    <Text style={styles.description}>{exp.description}</Text>
                                </View>
                            ))}
                        </View>
                    </View>
                </View>
            </Page>
        </Document>
    );
};