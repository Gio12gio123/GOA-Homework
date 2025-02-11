def grade(g):
    m = []
    for i in g:
        if i >= 90 and i <= 100:
            m.append("A")
        elif i < 90 and i > 80:
            m.append("B")
        elif i < 80 and i > 70:
            m.append("C")
        elif i < 70 and i > 60:
            m.append("D")
        elif i < 60 and i > 50:
            m.append("E")
        elif i < 50 and i > 0:
            m.append("F")

    a = sum(g) / len(g)
    maxs = max(g)
    return m, f"max grade is: {maxs}", f"average grade is: {a}"

print(grade([23, 56, 87, 100]))


def grade(avg):
    all = []
    for i in avg:
        if i >= 90 and i <= 100:
            all.append("A")
        elif i < 90 and i > 80:
            all.append("B")
        elif i < 80 and i > 70:
            all.append("C")
        elif i < 70 and i > 60:
            all.append("D")
        elif i < 60 and i > 50:
            all.append("E")
        elif i < 50 and i > 0:
            all.append("F")

    a = sum(avg) / len(avg)
    maxs = max(avg)
    min = min(avg)
    return all, f"max grade is: {maxs}", f"average grade is: {a}"

print(grade([23, 56, 87, 100]))

