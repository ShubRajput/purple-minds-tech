# Google Sheets Setup for Projects & Client Feedback

## 1. Create the spreadsheet

Use this Sheet ID in your `.env.local` (already set in example):

```
GOOGLE_SHEET_ID=19jBeu3FDClMNjy1gMCsYjH1ezgqgx5IBQLeOkk1zusw
```

Create **two sheets** (tabs) inside the workbook:

- **Sheet 1:** Rename to exactly `Projects`
- **Sheet 2:** Rename to exactly `Feedback`

---

## 2. Projects sheet – column names (Row 1)

Copy the header row below. Paste into **Row 1** of the **Projects** sheet.

```
Project Name	Type	One Line Description	Background Image
```

(Columns are: **Project Name** | **Type** | **One Line Description** | **Background Image**)

---

## 3. Projects sheet – dummy data (copy-paste)

Select cell **A2** and paste this block. It will fill one row per line (paste as “Paste as plain text” or “Paste” so tabs separate into columns).

```
FinTech Dashboard	Web App	Real-time analytics and reporting platform.	https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800
Health & Fitness App	Mobile App	Workout tracking and nutrition planning.	https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800
E-Commerce SaaS	SaaS	Multi-tenant storefront and admin.	https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800
AI Content Studio	AI	AI-powered content generation tool.	https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800
DevOps Portal	Cloud	CI/CD and infrastructure management.	https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800
Design System	UI/UX	Component library and design tokens.	https://images.unsplash.com/photo-1561070791-2526d41294b9?w=800
```

---

## 4. Feedback sheet – column names (Row 1)

Copy the header row below. Paste into **Row 1** of the **Feedback** sheet.

```
Quote	Name	Role	Avatar
```

(Columns are: **Quote** | **Name** | **Role** | **Avatar**)

---

## 5. Feedback sheet – dummy data (copy-paste)

Select cell **A2** and paste this block.

```
Purple Minds Tech delivered our SaaS platform on time and beyond expectations. Their technical depth and communication are outstanding.	Sarah Chen	CEO, CloudBase	SC
From concept to launch, the team was professional and innovative. Our app is now live and users love the experience.	Marcus Johnson	Founder, FitTrack	MJ
Best tech partner we have worked with. They understood our vision and turned it into a scalable, beautiful product.	Elena Rodriguez	CTO, DataFlow	ER
```

---

## 6. API access

1. **Google Cloud Console:** [Create a project](https://console.cloud.google.com/) (or use an existing one).
2. **Enable API:** APIs & Services → Enable APIs → enable **Google Sheets API**.
3. **Create API key:** APIs & Services → Credentials → Create credentials → API key. Copy the key.
4. **Share the sheet:** In Google Sheets, click Share → set to **“Anyone with the link” can view** (required for API key access).
5. **Env file:** Copy `.env.local.example` to `.env.local` and set:

```env
GOOGLE_SHEET_ID=19jBeu3FDClMNjy1gMCsYjH1ezgqgx5IBQLeOkk1zusw
GOOGLE_SHEETS_API_KEY=your_actual_api_key_here
```

Restart the dev server after changing `.env.local`. Data is cached for 60 seconds.
