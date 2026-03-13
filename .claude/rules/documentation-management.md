# Course Content Documentation Management

### Roadmap & Changelog Maintenance
- **Project Roadmap** (`./docs/project-roadmap.md`): Living document tracking course production phases, milestones, and progress
- **Project Changelog** (`./docs/project-changelog.md`): Detailed record of all significant changes to courses and materials
- **Content Standards** (`./docs/content-standards.md`): Quality standards for all course materials
- **Design Guidelines** (`./docs/design-guidelines.md`): Visual and instructional design guidelines

### Automatic Updates Required
- **After Course Module Completion**: Update roadmap progress status and changelog entries
- **After Major Milestones** (e.g., full course delivered): Review and adjust roadmap phases, update metrics
- **After Content Fixes**: Document fixes in changelog with severity and impact
- **After Quality Evaluations**: Record evaluation results and improvement actions
- **Weekly Reviews**: Update progress percentages and milestone statuses

### Documentation Triggers
The `project-manager` agent MUST update these documents when:
- A course production phase status changes (e.g., from "In Progress" to "Complete")
- Major course modules are completed or delivered
- Significant content issues are resolved
- Project timeline or scope adjustments are made
- New source materials or dependencies are added

### Update Protocol
1. **Before Updates**: Always read current roadmap and changelog status
2. **During Updates**: Maintain version consistency and proper formatting
3. **After Updates**: Verify links, dates, and cross-references are accurate
4. **Quality Check**: Ensure updates align with actual production progress

### Plans

### Plan Location
Save plans in `./plans` directory with timestamp and descriptive name.

**Format:** Use naming pattern from `## Naming` section injected by hooks.

**Example:** `plans/260311-1505-customer-service-course-design/`

#### File Organization

```
plans/
├── 260311-1505-customer-service-course-design/
    ├── research/
    │   ├── sme-report.md                # Subject Matter Expert findings
    │   ├── pedagogy-report.md           # Pedagogy Researcher findings
    │   ├── audience-report.md           # Audience Analyst findings
    │   ├── benchmark-report.md          # Benchmark Scout findings
    │   ├── constraints-report.md        # Constraint Mapper findings
    │   ├── visual-references/           # Screenshots and reference images
    │   └── ...
│   ├── reports/
│   │   ├── scout-report.md
│   │   ├── researcher-report.md
│   │   └── ...
│   ├── plan.md                                # Overview access point
│   ├── phase-01-discovery-and-analysis.md     # Learner analysis + needs assessment
│   ├── phase-02-learning-objectives.md        # Objectives design
│   ├── phase-03-content-structure.md          # Content selection + sequencing
│   ├── phase-04-lesson-plan.md                # Detailed lesson plan
│   ├── phase-05-slide-development.md          # Slide deck creation
│   ├── phase-06-activity-design.md            # Learning activities
│   ├── phase-07-materials-production.md       # Handouts, guides, assessments
│   └── phase-08-quality-evaluation.md         # 19-criterion evaluation
└── ...
```

#### File Structure

##### Overview Plan (plan.md)
- Keep generic and under 80 lines
- List each phase with status/progress
- Link to detailed phase files
- Key dependencies

##### Phase Files (phase-XX-name.md)
Fully respect the `./docs/content-standards.md` file.
Each phase file should contain:

**Context Links**
- Links to related reports, source materials, references

**Overview**
- Priority
- Current status
- Brief description

**Key Insights**
- Important findings from research
- Critical considerations about target learners

**Requirements**
- Learning objectives to be addressed
- Material specifications (format, length, style)

**Content Architecture**
- Course structure and flow
- Module/session breakdown
- Activity integration points

**Related Files**
- List of files to modify
- List of files to create
- List of source materials to reference

**Implementation Steps**
- Detailed, numbered steps
- Specific instructions for content creation

**Todo List**
- Checkbox list for tracking

**Success Criteria**
- Definition of done (must pass 19-criterion evaluation)
- Learner experience validation methods

**Risk Assessment**
- Content accuracy concerns
- Engagement risks for target audience

**Quality Considerations**
- Alignment with evaluation criteria
- Learner-centered design verification

**Next Steps**
- Dependencies on other phases
- Follow-up tasks
