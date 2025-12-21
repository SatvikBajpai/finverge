# Google Sheets CMS Setup Guide

## Step 1: Create the Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "FinVerge Insights Resources"

### Sheet Structure

Create columns with these exact headers in Row 1:

| Title | Description | Link | Category | Image |
|-------|-------------|------|----------|-------|

**Column Details:**
- **Title**: The resource title (e.g., "FinVerge Advisors Handbook")
- **Description**: Brief description of the resource
- **Link**: Full URL to the resource (Google Drive, PDF, etc.)
- **Category**: One of: `Handbook`, `Finance Hack`, or `Commentary`
- **Image**: URL to an image (or leave blank for default)

### Example Rows:

| Title | Description | Link | Category | Image |
|-------|-------------|------|----------|-------|
| FinVerge Advisors Handbook | Comprehensive guide to our services | https://drive.google.com/file/d/... | Handbook | https://images.unsplash.com/... |
| ESOP Handbook | Complete guide to Employee Stock Ownership Plans | https://drive.google.com/file/d/... | Handbook | https://images.unsplash.com/... |
| Finance Hacks Guide | Practical financial hacks to optimize operations | https://drive.google.com/file/d/... | Finance Hack | https://images.unsplash.com/... |

## Step 2: Make Sheet Publicly Readable

1. Click the **Share** button (top right)
2. Click **Change to anyone with the link**
3. Set permission to **Viewer**
4. Copy the share link

The link will look like:
```
https://docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit#gid=0
```

## Step 3: Get Your Sheet ID

From the link above, copy the **SHEET_ID_HERE** part.

Example:
- Full link: `https://docs.google.com/spreadsheets/d/1ABC123xyz456/edit#gid=0`
- Sheet ID: `1ABC123xyz456`

## Step 4: Add to Website

Create a `.env.local` file in your project root with:

```
NEXT_PUBLIC_GOOGLE_SHEET_ID=your_sheet_id_here
```

## Step 5: Deploy

When you're ready to deploy, add the environment variable in Vercel:
1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add: `NEXT_PUBLIC_GOOGLE_SHEET_ID` = your sheet ID
3. Redeploy

---

## How to Update Content

Simply edit the Google Sheet! Changes will appear on your website within seconds.

### Adding a New Resource:
1. Add a new row to the sheet
2. Fill in all columns
3. Save (auto-saves in Google Sheets)
4. Refresh your website

### Editing a Resource:
1. Find the row in your sheet
2. Edit any column
3. Save
4. Refresh your website

### Deleting a Resource:
1. Delete the entire row
2. The resource disappears from your website

---

## Notes

- Keep the header row (Row 1) intact
- Category must be exactly: `Handbook`, `Finance Hack`, or `Commentary`
- Links must start with `http://` or `https://`
- Empty rows are automatically skipped
