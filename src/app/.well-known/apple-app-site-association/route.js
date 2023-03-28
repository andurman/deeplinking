import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    "applinks": {
        "apps": [],
        "details": [
            {
                "appID": "H89CY3JT5Q.com.albarakaturk.mobilebranchtest1",
                "paths": [
                    "*",
                    "/"
                ]
            }
        ]
    }
  })
}
